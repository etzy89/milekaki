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
ok(get(4111,"tap","trust").mpd===1.3 && !get(4111,"tap","trust").flag,"Trust 4111 resolved");
ok(get(4111,"tap","dbs").mpd===0.4 && !get(4111,"tap","dbs").flag,"DBS 4111 resolved");
ok(get(4111,"tap","xl").mpd===0.4,"XL bus/MRT base");
ok(get(4722,"online","ls").mpd===4 && !get(4722,"online","ls").flag,"LS 4722 confirmed");
ok(get(5411,"online","ls",{ls:["family","dining"]}).mpd===4,"LS family setting");
ok(get(5814,"online","xl").mpd===4 && get(3309,"online","xl").mpd===0.4 && get(3309,"fcy","xl").mpd===4,"XL whitelist/fcy");
ok(get(5411,"online","xl").mpd===0.4,"XL 5411 base");
ok(get(5812,"wallet","citiamaze").flag===false && get(5812,"wallet","citiamaze").mpd===4 && !/Apple\/Google Pay may lose|Amaze in Apple\/Google Pay/.test(get(5812,"wallet","citiamaze").how + " " + get(5812,"wallet","citiamaze").note),"Amaze wallet caveat removed");
const plain = { used:0, spent:0, blockApprox:false, blockWhy:"", rateApprox:false, capUnmodelled:false };
const qIn = (o) => Object.assign({}, plain, o);
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
console.log("added cards:",M.ADDED.length,"merchants:",M.MERCHANTS.length, "fails:",fail);
process.exit(fail?1:0);
