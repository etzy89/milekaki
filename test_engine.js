const fs=require("fs"); eval(fs.readFileSync(__dirname+"/public/engine_core.js","utf8")+";globalThis.M=MCCX");
let fail=0; const ok=(c,msg)=>{ if(!c){fail++;console.log("FAIL",msg);} };
const get=(n,m,id,o)=>M.lookupAll(n,m,o||{}).find(r=>r.id===id);
const show=(n,m,o)=>console.log(n,m,M.lookup(n,m,o||{}).map(r=>`${r.id}:${r.mpd}${r.flag?"?":""}`).join(" "));
for (const [n,m] of [[5812,"wallet"],[5812,"tap"],[5812,"chip"],[5411,"wallet"],[4111,"tap"],[7372,"online"],[4814,"online"],[3501,"online"],[7399,"online"],[5999,"fcy"]]) show(n,m);
// checks
ok(get(5812,"wallet","pv").mpd===4,"PV wallet 4"); ok(get(5812,"tap","pv").mpd===0.4,"PV card tap base");
ok(get(4111,"tap","pv").mpd===4,"PV simplygo"); ok(get(5812,"chip","vs").mpd===0.4,"VS chip base"); ok(get(5541,"chip","vs").mpd===4,"VS petrol chip");
ok(get(5812,"chip","hsbc").mpd===0.4,"HSBC chip base"); ok(get(5812,"tap","hsbc").mpd===4 && /3.33/.test(get(5812,"tap","hsbc").kf),"HSBC tap 4 + kf");
ok(get(7399,"online","citi").mpd===0.4 && !get(7399,"online","citi").flag,"Citi 7399 base resolved");
ok(get(4111,"tap","trust").mpd===1.3 && !/rounding/i.test(get(4111,"tap","trust").note + get(5999,"tap","trust").note),"Trust earns on the actual amount");
ok(M.blockOf("trust").block===0,"Trust no S$5 block");
ok(get(4111,"tap","dbs").mpd===0.4 && get(4111,"online","dbs").mpd===4 && !/MileLion|SimplyGo earns/.test(get(4111,"tap","dbs").note),"DBS 4111 follows online/in-store T&Cs");
ok(!/MileLion/.test(M.ROWS.find(r=>r.m==="4111").v[4]) && M.ROWS.find(r=>r.m==="4111").v[7]=== "~1.3 mpd","4111 matrix");
ok(!M.ROWS.find(r=>r.m==="Recurring").v[7].startsWith("?"),"Trust recurring not flagged");
ok(!/S\$5/.test(M.SUMMARY.find(r=>String(r[0]).startsWith("Trust"))[5]),"Trust summary has no earn block");
ok(get(4111,"tap","xl").mpd===0.4,"XL bus/MRT base");
ok(get(4722,"online","ls").mpd===4 && !get(4722,"online","ls").flag,"LS 4722 confirmed");
ok(get(5411,"online","ls",{ls:["family","dining"]}).mpd===4,"LS family setting");
ok(get(5814,"online","xl").mpd===4 && get(3309,"online","xl").mpd===0.4 && get(3309,"fcy","xl").mpd===4,"XL whitelist/fcy");
ok(get(5411,"online","xl").mpd===0.4,"XL 5411 base");
ok(get(5812,"wallet","citiamaze").flag===false && get(5812,"wallet","citiamaze").mpd===4 && !/Apple\/Google Pay may lose|Amaze in Apple\/Google Pay/.test(get(5812,"wallet","citiamaze").how + " " + get(5812,"wallet","citiamaze").note),"Amaze wallet caveat removed");
const plain = { used:0, spent:0, blockApprox:false, blockWhy:"", rateApprox:false, capUnmodelled:false };
const qIn = (o) => Object.assign({}, plain, o);
ok(M.quoteEarn(qIn({ amount:4, mpd:1.3, base:1.3, cap:null, min:0, block:M.blockOf("trust").block })).miles===5.2,"Trust earns on S$4");
const ocbc = get(5651,"tap","ocbcrewards");
ok(ocbc && ocbc.mpd===4 && ocbc.base===0.4,"Uniqlo OCBC 4 mpd");
const u1500 = M.quoteEarn(qIn({ amount:1500, mpd:4, base:0.4, cap:1110, min:0, block:5 }));
ok(u1500.miles===4596,"Uniqlo 1500 miles "+u1500.miles);
ok(Math.abs(u1500.eff-3.06)<0.01,"Uniqlo 1500 mpd "+u1500.eff);
ok(u1500.breakdown.indexOf("1,110 × 4 mpd")>=0 && u1500.breakdown.indexOf("390 × 0.4 mpd")>=0,"Uniqlo 1500 breakdown "+u1500.breakdown);
ok(u1500.capHit,"Uniqlo 1500 cap hit");
ok(get(5651,"tap","uobprvi").mpd===1.4 && get(5651,"tap","citipm").mpd===1.2 && get(5651,"tap","dbsaltitude").mpd===1.3,"uncapped general rates");
const u10prvi = M.quoteEarn(qIn({ amount:10000, mpd:1.4, base:1.4, cap:null, min:0, block:0 }));
const u10citi = M.quoteEarn(qIn({ amount:10000, mpd:4, base:0.4, cap:1000, min:0, block:1 }));
ok(u10prvi.miles===14000 && u10prvi.miles>u10citi.miles,"Uniqlo 10000 PRVI beats capped 4 mpd");
ok(u10citi.capHit && u10citi.breakdown==="1,000 × 4 mpd + 9,000 × 0.4 mpd","Uniqlo 10000 breakdown "+u10citi.breakdown);
const atCap = M.quoteEarn(qIn({ amount:1000, mpd:4, base:0.4, cap:1000, min:0, block:1 }));
ok(atCap.miles===4000 && atCap.parts.length===1 && atCap.capHit,"cap boundary exact");
const overCap = M.quoteEarn(qIn({ amount:1004, mpd:4, base:0.4, cap:1000, min:0, block:5 }));
ok(overCap.miles===4000 && overCap.roundedOff===4 && overCap.capHit,"cap boundary block");
const logged = M.quoteEarn(qIn({ amount:1500, mpd:4, base:0.4, cap:1000, used:600, spent:600, min:0, block:1 }));
ok(logged.parts[0].amt===400 && logged.parts[1].amt===1100,"logged spend consumes cap");
const xlSmall = M.quoteEarn(qIn({ amount:100, mpd:4, base:0.4, cap:1000, min:500, block:5 }));
ok(xlSmall.minShort && xlSmall.miles===40,"min spend blocks bonus");
const split = M.splitPlan(10000, [
  { id:"citi", name:"Citi Rewards", group:"citi", bucket:"main", mpd:4, base:0.4, cap:1000, used:0, spent:0, min:0, block:1, blockApprox:false, blockWhy:"", rateApprox:false, capUnmodelled:false },
  { id:"citiamaze", name:"Citi Rewards + Amaze", group:"citi", bucket:"main", mpd:4, base:0.4, cap:1000, used:0, spent:0, min:0, block:1, blockApprox:false, blockWhy:"", rateApprox:false, capUnmodelled:false },
  { id:"uobprvi", name:"UOB PRVI Miles", group:"uobprvi", bucket:"", mpd:1.4, base:1.4, cap:null, used:0, spent:0, min:0, block:0, blockApprox:false, blockWhy:"", rateApprox:false, capUnmodelled:false }
]);
ok(split.better && split.legs[0].id==="citi" && split.legs[0].amt===1000 && split.legs[1].id==="uobprvi" && split.legs[1].amt===9000,"split legs");
ok(split.miles===16600 && split.miles>split.singleMiles,"split miles "+split.miles+" vs "+split.singleMiles);
ok(split.text==="Put first S$1,000 on Citi Rewards, rest on UOB PRVI Miles", split.text);
ok(get(4814,"online","dbs").note.includes("recurring"),"DBS recurring");
ok(get(0,"online","dbs",{tags:["krisplus"]}).mpd===4 && get(0,"online","citi",{tags:["krisplus"]}).mpd===0.4,"Kris+");
ok(get(0,"online","hsbc",{tags:["atome"]}).mpd===4,"Atome HSBC");
ok(get(5411,"wallet","dbsyuu",{tags:["coldstorage"]}).mpd===10,"yuu cold storage");
ok(get(5309,"tap","ocbcrewards").mpd===4 && get(5411,"tap","ocbcrewards").mpd===0.4,"OCBC rewards");
ok(get(9311,"online","amexkfascend").mpd===1.2 && get(9311,"online","dbsaltitude").mpd===0,"govt bills");
ok(get(5999,"fcy","dbsaltitude").mpd===2.2 && get(5999,"tap","dbsaltitude").mpd===1.3,"Altitude");
ok(get(5999,"tap","hsbctravelone").kf.includes("1"),"TravelOne kf");
ok(M.lookupAll(5999,"tap").filter(r=>r.added).length>=35,"added count");
ok(M.referralFor("pv").url==="" && M.referralFor("uobprvi").url==="" && M.referralFor("pv").label==="Apply","referral slots empty");
ok(M.capThresholds(0,799,1000).join(",")==="","under 80");
ok(M.capThresholds(0,800,1000).join(",")==="80","hit 80");
ok(M.capThresholds(700,1000,1000).join(",")==="80,100","cross 80 and 100");
ok(M.capThresholds(800,900,1000).join(",")==="","already past 80");
ok(M.capThresholds(900,1000,1000).join(",")==="100","hit 100");
ok(M.capThresholds(1000,1200,1000).join(",")==="","already at 100");
ok(M.capThresholds(0,1000,0).join(",")==="","no cap");
const seen=["citi|main|2026-11-01|80"];
const fire=M.capAlertsToFire({cardId:"citi",bucket:"main",cycleKey:"2026-11-01",beforeUsed:700,afterUsed:1000,cap:1000,seen});
ok(fire.keys.length===1 && fire.keys[0]==="citi|main|2026-11-01|100" && fire.levels[0]==="100","80 already sent");
const again=M.capAlertsToFire({cardId:"citi",bucket:"main",cycleKey:"2026-11-01",beforeUsed:700,afterUsed:1000,cap:1000,seen:seen.concat(fire.keys)});
ok(again.keys.length===0,"both thresholds already sent");
ok(M.guessMcc("FAIRPRICE FINEST SINGAPORE").mcc===5411,"guess fairprice");
const uobLine=M.parseStatementText("03/11/2026 FAIRPRICE FINEST 45.60 SGD");
ok(uobLine.length===1 && uobLine[0].date==="2026-11-03" && uobLine[0].amount===45.6,"UOB-like line");
ok(M.parseStatementText("03 Nov 2026 NTUC FAIRPRICE 12.50")[0].date==="2026-11-03","DBS-like line");
ok(M.parseStatementText("03NOV26 FAIRPRICE 9.90")[0].amount===9.9,"HSBC-like line");
ok(M.parseStatementText("03-11-2026 FAIRPRICE 8.00 DR")[0].amount===8,"Maybank-like line");
const trustCsv=M.parseCsv("Date,Description,Amount,Currency\n2026-11-03,GRAB,12.50,SGD");
ok(trustCsv.mapped && trustCsv.txns[0].descriptor==="GRAB" && trustCsv.txns[0].amount===12.5,"Trust CSV");
ok(M.parseCsv("Foo,Bar\n1,2").mapped===false,"CSV needs a mapping");
const pv=M.reconcileStatement({cardId:"pv",txns:[
  {date:"2026-11-02",descriptor:"FAIRPRICE",amount:100,mcc:5411,mode:"wallet"},
  {date:"2026-11-03",descriptor:"IKEA",amount:550,mcc:5712,mode:"wallet"},
  {date:"2026-11-04",descriptor:"AIA",amount:80,mcc:6300,mode:"wallet"}
]});
ok(pv.totalMiles===2420 && pv.bonusMiles===2400 && pv.baseMiles===20 && pv.rows[2].excluded,"PV statement");
const citiStmt=M.reconcileStatement({cardId:"citi",txns:[
  {date:"2026-11-02",descriptor:"RESTAURANT",amount:200,mcc:5812,mode:"online"},
  {date:"2026-11-03",descriptor:"MORE",amount:900,mcc:5812,mode:"online"}
]});
ok(citiStmt.totalMiles===4040 && citiStmt.bonusMiles===4000 && citiStmt.baseMiles===40,"Citi statement");
const hsbcStmt=M.reconcileStatement({cardId:"hsbc",txns:[
  {date:"2026-11-02",descriptor:"RESTAURANT",amount:200,mcc:5812,mode:"tap"},
  {date:"2026-11-03",descriptor:"MORE",amount:900,mcc:5812,mode:"tap"}
]});
ok(hsbcStmt.totalMiles===4040 && hsbcStmt.rows[1].capHit,"HSBC statement");
const xlShort=M.reconcileStatement({cardId:"xl",txns:[{date:"2026-11-02",descriptor:"KFC",amount:100,mcc:5814,mode:"tap"}]});
ok(xlShort.minMet===false && xlShort.totalMiles===40 && xlShort.rows[0].minShort,"XL below minimum");
const xlOk=M.reconcileStatement({cardId:"xl",txns:[
  {date:"2026-11-02",descriptor:"KFC",amount:200,mcc:5814,mode:"tap"},
  {date:"2026-11-03",descriptor:"MCD",amount:400,mcc:5814,mode:"tap"}
]});
ok(xlOk.minMet && xlOk.totalMiles===2400 && xlOk.bonusMiles===2400,"XL statement");
const dbsStmt=M.reconcileStatement({cardId:"dbs",txns:[
  {date:"2026-11-02",descriptor:"RESTAURANT",amount:200,mcc:5812,mode:"online"},
  {date:"2026-11-03",descriptor:"MORE",amount:900,mcc:5812,mode:"online"}
]});
ok(dbsStmt.totalMiles===4040 && dbsStmt.rows[1].capHit,"DBS statement");
const lsStmt=M.reconcileStatement({cardId:"ls",txns:[
  {date:"2026-11-02",descriptor:"DINING",amount:100,mcc:5812,mode:"tap"},
  {date:"2026-11-03",descriptor:"MORE",amount:700,mcc:5812,mode:"tap"}
]});
ok(lsStmt.totalMiles===3020 && lsStmt.bonusMiles===3000 && lsStmt.baseMiles===20 && lsStmt.rows[1].capHit,"Lady's statement");
const migrated=M.ladySettings({ls:["fashion","beauty"]});
ok(migrated.ls.join(",")==="fashion,beauty" && migrated.ladys==="fashion","existing categories stay on Solitaire");
ok(M.ladySettings({ls:["dining","travel"],ladys:"family"}).ladys==="family","Lady's category stored separately");
ok(get(5812,"tap","ls",{ls:[]}).mpd===0.4,"Solitaire with no categories is base");
ok(get(5812,"tap","ls",{ls:["dining","travel"]}).mpd===4,"Solitaire dining");
ok(get(5812,"tap","uobladys",{ladys:""}).mpd===0.4,"Lady's card with no category is base");
const ladyDining=get(5812,"tap","uobladys",{ladys:"dining"});
ok(ladyDining.mpd===4 && ladyDining.bucket==="dining" && /1,000/.test(ladyDining.cap),"Lady's one category and S$1,000 cap");
ok(get(5812,"tap","uobladys",{ladys:"fashion"}).mpd===0.4,"Lady's other category stays base");
ok(get(5651,"tap","uobladys",{ladys:"fashion"}).mpd===4,"Lady's fashion");
const ladyCap=M.reconcileStatement({cardId:"uobladys",ladys:"dining",txns:[{date:"2026-11-02",descriptor:"DINNER",amount:1100,mcc:5812,mode:"tap"}]});
ok(ladyCap.totalMiles===4040 && ladyCap.bonusMiles===4000 && ladyCap.baseMiles===40 && ladyCap.rows[0].capHit,"Lady's S$1,000 cap");
const gap=M.explainMilesGap(pv.rows,20,2000);
ok(gap.delta===-400 && gap.likely.some(r=>r.descriptor==="IKEA") && gap.likely.some(r=>r.descriptor==="AIA"),"shortfall points at cap and exclusion");
const page=fs.readFileSync(__dirname+"/public/mcc/5651.html","utf8");
ok(page.includes("Uniqlo") && page.includes("MCC 5651") && page.includes("https://milekaki.com/#5651/tap") && page.includes("milekaki.goatcounter.com/count"),"mcc page");
console.log("added cards:",M.ADDED.length,"merchants:",M.MERCHANTS.length, "fails:",fail);
process.exit(fail?1:0);
