"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_1 = require("../02");
var utils_1 = require("../utils");
var IDsForLetterCounter = [
    ['abcdef', { a: 1, b: 1, c: 1, d: 1, e: 1, f: 1 }],
    ['bababc', { a: 2, b: 3, c: 1 }],
    ['abbcde', { a: 1, b: 2, c: 1, d: 1, e: 1 }],
    ['abcccd', { a: 1, b: 1, c: 3, d: 1 }],
    ['aabcdd', { a: 2, b: 1, c: 1, d: 2 }],
    ['abcdee', { a: 1, b: 1, c: 1, d: 1, e: 2 }],
    ['ababab', { a: 3, b: 3 }] //three a and three b, but it only counts once.
];
var IDsForLogger = [
    ['abcdef', new Set([])],
    ['bababc', new Set([2, 3])],
    ['abbcde', new Set([2])],
    ['abcccd', new Set([3])],
    ['aabcdd', new Set([2])],
    ['abcdee', new Set([2])],
    ['ababab', new Set([3])] // contains three a and three b, but it only counts once.
];
var IDsForChecksum = [
    [
        'lnfgdsywjyleogambzuchirkpx,nnfqdskfjyteogambzuchirkpx,lnfqdvvwjyteofambzuchirkpf,lnfqdsvwjyteogvmbzuthirkpn,ltfqdsvwjyoeogambxuchirkpx,lnfqcsvwjytzogacbzuchirkpx,lpfpdsvwjyteogambyuchirkpx,pnfqdsvwjyteogqmbzuchinkpx,lnfqdsvwjytyopambzpchirkpx,lnfqisswjyteogadbzuchirkpx,lnfqdsuwjcteogambzuchirepx,lnfqdovwjnteigambzuchirkpx,lnfbdsvwjxteogambzuchirkax,lnfqdsawjyteogamxzuchiwkpx,lncqdsvwjoteogambzuchirfpx,lnfadsrwjyteogambzuchirktx,lnfqdsvhjyteorazbzuchirkpx,lwfqdsvwjytdogambzuchirkhx,lnfqdhvwjyteogambzuhairkpx,lnfqdsvwjytlogambzgchyrkpx,lnfqdsvwjyteogamnzjwhirkpx,lnfodsvwjyteogahuzuchirkpx,lnfqdsvtjyteogamvzwchirkpx,lnfqdsvwjzueogambzuxhirkpx,lnfqxsvljytxogambzuchirkpx,lnfqdsvwjyteogambpyvhirkpx,lqzqdsvwjnteogambzuchirkpx,lnfqdsvwjyteogumbzichirapx,lnfqdbvwjytedgaubzuchirkpx,lnfqdsvwpyteogabbhuchirkpx,nnfqdsvwryteogambzuchiwkpx,lrfqdsvwjeteogambzuchhrkpx,lnfqdsvwxyteogamtzucyirkpx,lnfsdsvwjyteogambzulhirknx,lnfqdsvwjyreoyambzmchirkpx,ltfqdsvwjytdogkmbzuchirkpx,lnfqwbvcjyteogambzuchirkpx,lnfqdsvwjyteogamrzfchirmpx,lnfqdsvwjqteogambzucwirkpy,lnfqdslwjyfeogambzuchikkpx,lnfqdsvwjybeogambzuchikjpx,lofqysvwjyteogasbzuchirkpx,lnfqusvwjyteogambzucverkpx,lnfqdsvwjyteogaibzuchfrkzx,lnfqdsvwjyleogabbzuchirkcx,lnfqdsvqjyteogambzuchdqkpx,lnfqdsvwjwtewgambzuciirkpx,lnfqisvwjatwogambzuchirkpx,lnfqdgvwjyteogambzuchizkix,lnfqdsxwjyteogambyuehirkpx,lpffdsvwjyteogamrzuchirkpx,lnirdsvwjyteogambzuchirkbx,lnfqdsxdjyteogazbzuchirkpx,lnfgdgvwyyteogambzuchirkpx,lnfqxsvwjyteogambzmcwirkpx,lnxqjsvwjyteogambzuchirkqx,lnrqdsvwjpteogkmbzuchirkpx,lnfqdstwjyteoeahbzuchirkpx,lnfqdsvwtuteogambzuchixkpx,lwfqvsvwjyteogambzughirkpx,lnkqdsvwjyfeogambzuuhirkpx,lvvqdsvwjyteogambzuchirkpn,jndqdsvwjyteogzmbzuchirkpx,enfqdszwjyteogambcuchirkpx,lnfqdsvwiyteogakbauchirkpx,lnfqdsvwjyteogtmbzxcdirkpx,fnfqdswwjyteogawbzuchirkpx,lnfqdsvwjydejqambzuchirkpx,lnqqdsvwjyteogambzucbdrkpx,lnfqdsvwjyteogadbzuchirxcx,lnfqdslwjyyeogambzulhirkpx,lnfqdsvwjytecgambzucgirkpb,lbmqdsvwjyteogamkzuchirkpx,lbfqdsvrjyteogambzuchirapx,lnfqdsmwjyteogambzucfarkpx,lnfqasvwoyteofambzuchirkpx,bnfudsvwjyteogambzucharkpx,lnfrdsvwjytxogambzuchirkpg,lbfqdsvwjyteagambzucdirkpx,lxfqdsvwjytuogambzucjirkpx,lnfqdsvwjcteogamyzuchiikpx,lnfodsvwjyteognmbzuchirapx,ltfqdsvwjytedgaxbzuchirkpx,lnfqdshwjyteogambzucsilkpx,lnfqdsvwpyteohambzuchitkpx,wnzqdsvwjyteogambiuchirkpx,lnfqdsvwayteogambzhchirkpw,ltfqcsvwjrteogambzuchirkpx,lnfqdsvwaytekgamvzuchirkpx,lnfqdsvwjyteogambzokpirkpx,lnfqysbwjyeeogambzuchirkpx,lnsqdsvwjyteogambzuchikkpd,lrfqdsvwjyteogahbzochirkpx,lnfqdsvwjyreoggmbzuchjrkpx,lxfqdsvwjyteogkmbzuchirkpp,enhqdbvwjyteogambzuchirkpx,jnfqdsvwjyteogamczuuhirkpx,lnfqdsvwuyteogadbzuchirkpw,lnfqdsvjjytergambznchirkpx,lnfqdsvwjyteoglmbzuceijkpx,lwfqdsvwjyteogamieuchirkpx,lnfqdsvwjfaeogambzqchirkpx,lfbqdjvwjyteogambzuchirkpx,lnfqdsvwjxteoaambzuchirkpp,lnfqdsvwjyheogjmbzgchirkpx,lnfqdskwjyteonambzuchiikpx,lnfqdwvwjyteogambxuchirkph,pnfqdsvwdyteogambzuchihkpx,lnoqdsvwjyteogaybznchirkpx,lnfqdsvwfyxefgambzuchirkpx,lnfqdsvwjyteotamxzmchirkpx,lnfqdsvwjyteigwmbzuchivkpx,lnfqdsvwjytekgambcuchirkwx,lnfqdsvwjuteogamrzulhirkpx,lnfqdsvwjyteogambzucczrgpx,wnfqzsvwjyteogambduchirkpx,lnfqdsowjyteogambuuthirkpx,lnfqdsvrjyteogcmbzuclirkpx,knfqdsvwgyteogambzuchorkpx,lnaqdsvwjytuogdmbzuchirkpx,lnfrdsvwjyteogambluchigkpx,lnfqqzvwjyteogambzkchirkpx,lnfqdsvwjyteogamuzuchgrkux,lnfqdsvnjyteogxmbznchirkpx,lnfqdsvwjyteolajbzuchdrkpx,lnfqdsvwjypeoiagbzuchirkpx,lnrqdsvwjyteozamuzuchirkpx,lnfqdsvwjytkogaubzucqirkpx,lnkbdsvwjyteogacbzuchirkpx,unfqdsvwjybeogambwuchirkpx,lnfqfsvzjyteogambzuchiikpx,lnfqdsvgjyreogahbzuchirkpx,lnfqdsewjyteogavbeuchirkpx,lnfqdsvwjdteogambbuchidkpx,lnfqdsvwjythogambzcchirkvx,lnfqdscwjyteorambzuchirgpx,cnfqdzvwjyteogambzushirkpx,lnfgdsgwjytedgambzuchirkpx,lnfqdsvwbyteogimbzuchdrkpx,lnfqdsswjyteogambzuohbrkpx,lnfqdsvwjytqogabbzachirkpx,lnfqdsvwjyteogmmbzucqiukpx,lnfxdsrwjyteogambzuchnrkpx,lnfqnqvwjyteogambzuchiwkpx,lffqisvwjyteogambzulhirkpx,lnfqdsxwjydeogambzucfirkpx,lnfqdsvwjyteogambzucjirkrp,lnfqdsnqjyteogambduchirkpx,fnfqdmvwjyteogamlzuchirkpx,lnfqvsvwjyteooamdzuchirkpx,lnfqdsvcyyteogambzuchickpx,onfqdsvwjyqeogambzuchirqpx,znfqdcvwjyteoaambzuchirkpx,lnfqdsvwjzteogambzuchidklx,lnfqjsvwjyteogjmbzuchirkpv,lnfqdsvwjytgorambzuchirppx,lzfqdsvwpfteogambzuchirkpx,lnfidsfwjyteogapbzuchirkpx,lnfodsvwbyteobambzuchirkpx,lnlqdsvwjytefgambzuchfrkpx,lnkqdsvwjyteogambzkchgrkpx,tnfqdsvwjyteoiamhzuchirkpx,lnfqdsvwjyteogamllschirkpx,lnfqdsvwjmthogamizuchirkpx,lnfqdbvwjyteogafbzuchirkpb,lnfxosvwjyteogahbzuchirkpx,lnmqdsvwjyzeogambzuchirkcx,lnfqdevbjytxogambzuchirkpx,lnfqdsvwjyteogamzzudhipkpx,lnfqdszwjyteoqambzuchirkpp,lffqdsvwjyteogamtouchirkpx,lnfqdsvhjytfogambzucharkpx,hnfqdsvwjyteogembzschirkpx,lnfqdsvwjateogambzuchirmpa,lnfqdsvcjyteogambzocairkpx,lnfqdsvwjyteogamwzmchirkpd,lnfqzsvwjyteogdmbzuyhirkpx,lnfqdsvwjytfyglmbzuchirkpx,lnfndsvwjyteogambzuchirktf,gnfqdnvwjytevgambzuchirkpx,lnfqdsvwjyteoganbpuchorkpx,lnfpdsvwnyteogambzucqirkpx,fnfqdstejyteogambzuchirkpx,lnfqlsvwjyteowambzuchirkmx,lnfqdsvwjyteogmmdzuchtrkpx,lnfqdsvwcyteogaqbzuchirkqx,lnfqdsvwjytlogtmbzuchiwkpx,lnfqdsvwoyteogambzuczirkwx,lnfqdsvwjyteogzybzucdirkpx,lnfqdvvwjyteogumbzuchiukpx,lnfqbwvwjyteogambzuchjrkpx,lnfgdsvwjyteogambzvchirkzx,lnfqdsvwjvtjogambzuchiokpx,lnfedsvwjyteogambzuchivkph,lhfqusvwjytaogambzuchirkpx,lnfqdsvwjyteogacbzuihirkpv,lnfwdsvwjyteogambzucokrkpx,lnfqtsvwjpteognmbzuchirkpx,anfqdswwjyteogambzucairkpx,lnfqdsvwjyteorambzuchirlsx,lnfqdsvwjytgogambzychirkpc,lnfqdhvwjyteogambzachirklx,lnfwdsvwjyteogaobquchirkpx,rnfqdsvwjiteogambzuhhirkpx,lnfqdsuwjyemogambzuchirkpx,hnfqdsvwjyteogambzuchprfpx,anfqssvwjyteogambzumhirkpx,lnfkdsvwjyteogafbzqchirkpx,lnfqdsvwjyteogacqzuchirspx,lnfqdskwjyteggambzuchiakpx,lnnqdsvwjyteooambzuchihkpx,lnlqdsvjjyteogambzuchgrkpx,lnfqdsvwjyteogamszochirkex,lnfqbsvwjyteogambzqchirepx,lnfqdsbwjcteogambzhchirkpx,lnfqdwvzjyteogambzechirkpx,ynfadsvwdyteogambzuchirkpx,tnfqdsvwjytuogambzuohirkpx,lnfqdsvwjyteogambzaohivkpx,mnfqisvwjyteogagbzuchirkpx,lnfqbsvwjyueogambzuchirkhx,ynfqdsvwjyteogdmbzuchinkpx,lnfqdwhwjyteogambzuchirqpx,mnfqdsvwjyteogambzfchkrkpx,lnfqdsnwjyteogambzgchiqkpx,lnfqdsvwjytergambzuchiuklx,lnfqdqvjjyteogamtzuchirkpx,lnfqdscwjyteorambzuchzrgpx,enfqdevwjyteogaabzuchirkpx,gnfqdsvbjyteogambzuchirkph,lnfqdxvwjyteogambzubhixkpx,lnfqdsvwjyteogambojchihkpx,lnfqdsvwjytdogambzuzhilkpx,lnfqdsvwjyteogamezuqhirtpx,tnfhdsvwjyteogambzuvhirkpx,lnfzdsvwjnteogahbzuchirkpx,lnfqdsvwjyteogambzfzhirkvx,lnfqqsvwjyteogambzuchirgpo,lufqpsvwjythogambzuchirkpx,lnfqdsvwjyteogzmbzuchimkix,lnwqdspwjyteogambzcchirkpx,lnfqdsowjyteogambzuchigypx,lnfqdnvvjyteogambzucjirkpx,lnfjdsvwryteogambzuchirkcx,lnfqdsvwbyteogambzuchirfpb,lnfqdsvwjyheogambzxchprkpx,lnfqmsvwjytezgambzuchirlpx,lnaqdsvwjyteogamdzuzhirkpx,lnoqdsvwjytebgambfuchirkpx,lnfqdtvwjytvogambzuchirkpv',
        7936
    ],
    ['abcdef, bababc, abbcde, abcccd, aabcdd, abcdee, ababab', 12]
];
test.each(IDsForChecksum)(
// '%s contains letters which appears exactly twice and three times. Multiplying these together produces a checksum of %i',
'%s produces a checksum of %i', function (ids, expected) {
    expect(_02_1.calculateChecksum(ids)).toBe(expected);
});
test.each(IDsForLetterCounter)(
// '%s contains %i a, %i b, %i c, %i d, %i e',
"%s contains %o", function (id, expected) {
    expect(_02_1.countLetterAppearance(id)).toEqual(expected);
});
test.each(IDsForLetterCounter)('%s to Match Snapshot', function (id) {
    expect(_02_1.countLetterAppearance(id)).toMatchSnapshot();
});
test.each(IDsForLogger)('%s contains letters which appears exactly %p times', function (id, result) {
    expect(_02_1.getDifferentAppearanceNumbersById(_02_1.countLetterAppearance(id))).toEqual(result);
});
// 2nd Part
var IDsForAlmostEqualIDs = [
    [
        'lnfgdsywjyleogambzuchirkpx,nnfqdskfjyteogambzuchirkpx,lnfqdvvwjyteofambzuchirkpf,lnfqdsvwjyteogvmbzuthirkpn,ltfqdsvwjyoeogambxuchirkpx,lnfqcsvwjytzogacbzuchirkpx,lpfpdsvwjyteogambyuchirkpx,pnfqdsvwjyteogqmbzuchinkpx,lnfqdsvwjytyopambzpchirkpx,lnfqisswjyteogadbzuchirkpx,lnfqdsuwjcteogambzuchirepx,lnfqdovwjnteigambzuchirkpx,lnfbdsvwjxteogambzuchirkax,lnfqdsawjyteogamxzuchiwkpx,lncqdsvwjoteogambzuchirfpx,lnfadsrwjyteogambzuchirktx,lnfqdsvhjyteorazbzuchirkpx,lwfqdsvwjytdogambzuchirkhx,lnfqdhvwjyteogambzuhairkpx,lnfqdsvwjytlogambzgchyrkpx,lnfqdsvwjyteogamnzjwhirkpx,lnfodsvwjyteogahuzuchirkpx,lnfqdsvtjyteogamvzwchirkpx,lnfqdsvwjzueogambzuxhirkpx,lnfqxsvljytxogambzuchirkpx,lnfqdsvwjyteogambpyvhirkpx,lqzqdsvwjnteogambzuchirkpx,lnfqdsvwjyteogumbzichirapx,lnfqdbvwjytedgaubzuchirkpx,lnfqdsvwpyteogabbhuchirkpx,nnfqdsvwryteogambzuchiwkpx,lrfqdsvwjeteogambzuchhrkpx,lnfqdsvwxyteogamtzucyirkpx,lnfsdsvwjyteogambzulhirknx,lnfqdsvwjyreoyambzmchirkpx,ltfqdsvwjytdogkmbzuchirkpx,lnfqwbvcjyteogambzuchirkpx,lnfqdsvwjyteogamrzfchirmpx,lnfqdsvwjqteogambzucwirkpy,lnfqdslwjyfeogambzuchikkpx,lnfqdsvwjybeogambzuchikjpx,lofqysvwjyteogasbzuchirkpx,lnfqusvwjyteogambzucverkpx,lnfqdsvwjyteogaibzuchfrkzx,lnfqdsvwjyleogabbzuchirkcx,lnfqdsvqjyteogambzuchdqkpx,lnfqdsvwjwtewgambzuciirkpx,lnfqisvwjatwogambzuchirkpx,lnfqdgvwjyteogambzuchizkix,lnfqdsxwjyteogambyuehirkpx,lpffdsvwjyteogamrzuchirkpx,lnirdsvwjyteogambzuchirkbx,lnfqdsxdjyteogazbzuchirkpx,lnfgdgvwyyteogambzuchirkpx,lnfqxsvwjyteogambzmcwirkpx,lnxqjsvwjyteogambzuchirkqx,lnrqdsvwjpteogkmbzuchirkpx,lnfqdstwjyteoeahbzuchirkpx,lnfqdsvwtuteogambzuchixkpx,lwfqvsvwjyteogambzughirkpx,lnkqdsvwjyfeogambzuuhirkpx,lvvqdsvwjyteogambzuchirkpn,jndqdsvwjyteogzmbzuchirkpx,enfqdszwjyteogambcuchirkpx,lnfqdsvwiyteogakbauchirkpx,lnfqdsvwjyteogtmbzxcdirkpx,fnfqdswwjyteogawbzuchirkpx,lnfqdsvwjydejqambzuchirkpx,lnqqdsvwjyteogambzucbdrkpx,lnfqdsvwjyteogadbzuchirxcx,lnfqdslwjyyeogambzulhirkpx,lnfqdsvwjytecgambzucgirkpb,lbmqdsvwjyteogamkzuchirkpx,lbfqdsvrjyteogambzuchirapx,lnfqdsmwjyteogambzucfarkpx,lnfqasvwoyteofambzuchirkpx,bnfudsvwjyteogambzucharkpx,lnfrdsvwjytxogambzuchirkpg,lbfqdsvwjyteagambzucdirkpx,lxfqdsvwjytuogambzucjirkpx,lnfqdsvwjcteogamyzuchiikpx,lnfodsvwjyteognmbzuchirapx,ltfqdsvwjytedgaxbzuchirkpx,lnfqdshwjyteogambzucsilkpx,lnfqdsvwpyteohambzuchitkpx,wnzqdsvwjyteogambiuchirkpx,lnfqdsvwayteogambzhchirkpw,ltfqcsvwjrteogambzuchirkpx,lnfqdsvwaytekgamvzuchirkpx,lnfqdsvwjyteogambzokpirkpx,lnfqysbwjyeeogambzuchirkpx,lnsqdsvwjyteogambzuchikkpd,lrfqdsvwjyteogahbzochirkpx,lnfqdsvwjyreoggmbzuchjrkpx,lxfqdsvwjyteogkmbzuchirkpp,enhqdbvwjyteogambzuchirkpx,jnfqdsvwjyteogamczuuhirkpx,lnfqdsvwuyteogadbzuchirkpw,lnfqdsvjjytergambznchirkpx,lnfqdsvwjyteoglmbzuceijkpx,lwfqdsvwjyteogamieuchirkpx,lnfqdsvwjfaeogambzqchirkpx,lfbqdjvwjyteogambzuchirkpx,lnfqdsvwjxteoaambzuchirkpp,lnfqdsvwjyheogjmbzgchirkpx,lnfqdskwjyteonambzuchiikpx,lnfqdwvwjyteogambxuchirkph,pnfqdsvwdyteogambzuchihkpx,lnoqdsvwjyteogaybznchirkpx,lnfqdsvwfyxefgambzuchirkpx,lnfqdsvwjyteotamxzmchirkpx,lnfqdsvwjyteigwmbzuchivkpx,lnfqdsvwjytekgambcuchirkwx,lnfqdsvwjuteogamrzulhirkpx,lnfqdsvwjyteogambzucczrgpx,wnfqzsvwjyteogambduchirkpx,lnfqdsowjyteogambuuthirkpx,lnfqdsvrjyteogcmbzuclirkpx,knfqdsvwgyteogambzuchorkpx,lnaqdsvwjytuogdmbzuchirkpx,lnfrdsvwjyteogambluchigkpx,lnfqqzvwjyteogambzkchirkpx,lnfqdsvwjyteogamuzuchgrkux,lnfqdsvnjyteogxmbznchirkpx,lnfqdsvwjyteolajbzuchdrkpx,lnfqdsvwjypeoiagbzuchirkpx,lnrqdsvwjyteozamuzuchirkpx,lnfqdsvwjytkogaubzucqirkpx,lnkbdsvwjyteogacbzuchirkpx,unfqdsvwjybeogambwuchirkpx,lnfqfsvzjyteogambzuchiikpx,lnfqdsvgjyreogahbzuchirkpx,lnfqdsewjyteogavbeuchirkpx,lnfqdsvwjdteogambbuchidkpx,lnfqdsvwjythogambzcchirkvx,lnfqdscwjyteorambzuchirgpx,cnfqdzvwjyteogambzushirkpx,lnfgdsgwjytedgambzuchirkpx,lnfqdsvwbyteogimbzuchdrkpx,lnfqdsswjyteogambzuohbrkpx,lnfqdsvwjytqogabbzachirkpx,lnfqdsvwjyteogmmbzucqiukpx,lnfxdsrwjyteogambzuchnrkpx,lnfqnqvwjyteogambzuchiwkpx,lffqisvwjyteogambzulhirkpx,lnfqdsxwjydeogambzucfirkpx,lnfqdsvwjyteogambzucjirkrp,lnfqdsnqjyteogambduchirkpx,fnfqdmvwjyteogamlzuchirkpx,lnfqvsvwjyteooamdzuchirkpx,lnfqdsvcyyteogambzuchickpx,onfqdsvwjyqeogambzuchirqpx,znfqdcvwjyteoaambzuchirkpx,lnfqdsvwjzteogambzuchidklx,lnfqjsvwjyteogjmbzuchirkpv,lnfqdsvwjytgorambzuchirppx,lzfqdsvwpfteogambzuchirkpx,lnfidsfwjyteogapbzuchirkpx,lnfodsvwbyteobambzuchirkpx,lnlqdsvwjytefgambzuchfrkpx,lnkqdsvwjyteogambzkchgrkpx,tnfqdsvwjyteoiamhzuchirkpx,lnfqdsvwjyteogamllschirkpx,lnfqdsvwjmthogamizuchirkpx,lnfqdbvwjyteogafbzuchirkpb,lnfxosvwjyteogahbzuchirkpx,lnmqdsvwjyzeogambzuchirkcx,lnfqdevbjytxogambzuchirkpx,lnfqdsvwjyteogamzzudhipkpx,lnfqdszwjyteoqambzuchirkpp,lffqdsvwjyteogamtouchirkpx,lnfqdsvhjytfogambzucharkpx,hnfqdsvwjyteogembzschirkpx,lnfqdsvwjateogambzuchirmpa,lnfqdsvcjyteogambzocairkpx,lnfqdsvwjyteogamwzmchirkpd,lnfqzsvwjyteogdmbzuyhirkpx,lnfqdsvwjytfyglmbzuchirkpx,lnfndsvwjyteogambzuchirktf,gnfqdnvwjytevgambzuchirkpx,lnfqdsvwjyteoganbpuchorkpx,lnfpdsvwnyteogambzucqirkpx,fnfqdstejyteogambzuchirkpx,lnfqlsvwjyteowambzuchirkmx,lnfqdsvwjyteogmmdzuchtrkpx,lnfqdsvwcyteogaqbzuchirkqx,lnfqdsvwjytlogtmbzuchiwkpx,lnfqdsvwoyteogambzuczirkwx,lnfqdsvwjyteogzybzucdirkpx,lnfqdvvwjyteogumbzuchiukpx,lnfqbwvwjyteogambzuchjrkpx,lnfgdsvwjyteogambzvchirkzx,lnfqdsvwjvtjogambzuchiokpx,lnfedsvwjyteogambzuchivkph,lhfqusvwjytaogambzuchirkpx,lnfqdsvwjyteogacbzuihirkpv,lnfwdsvwjyteogambzucokrkpx,lnfqtsvwjpteognmbzuchirkpx,anfqdswwjyteogambzucairkpx,lnfqdsvwjyteorambzuchirlsx,lnfqdsvwjytgogambzychirkpc,lnfqdhvwjyteogambzachirklx,lnfwdsvwjyteogaobquchirkpx,rnfqdsvwjiteogambzuhhirkpx,lnfqdsuwjyemogambzuchirkpx,hnfqdsvwjyteogambzuchprfpx,anfqssvwjyteogambzumhirkpx,lnfkdsvwjyteogafbzqchirkpx,lnfqdsvwjyteogacqzuchirspx,lnfqdskwjyteggambzuchiakpx,lnnqdsvwjyteooambzuchihkpx,lnlqdsvjjyteogambzuchgrkpx,lnfqdsvwjyteogamszochirkex,lnfqbsvwjyteogambzqchirepx,lnfqdsbwjcteogambzhchirkpx,lnfqdwvzjyteogambzechirkpx,ynfadsvwdyteogambzuchirkpx,tnfqdsvwjytuogambzuohirkpx,lnfqdsvwjyteogambzaohivkpx,mnfqisvwjyteogagbzuchirkpx,lnfqbsvwjyueogambzuchirkhx,ynfqdsvwjyteogdmbzuchinkpx,lnfqdwhwjyteogambzuchirqpx,mnfqdsvwjyteogambzfchkrkpx,lnfqdsnwjyteogambzgchiqkpx,lnfqdsvwjytergambzuchiuklx,lnfqdqvjjyteogamtzuchirkpx,lnfqdscwjyteorambzuchzrgpx,enfqdevwjyteogaabzuchirkpx,gnfqdsvbjyteogambzuchirkph,lnfqdxvwjyteogambzubhixkpx,lnfqdsvwjyteogambojchihkpx,lnfqdsvwjytdogambzuzhilkpx,lnfqdsvwjyteogamezuqhirtpx,tnfhdsvwjyteogambzuvhirkpx,lnfzdsvwjnteogahbzuchirkpx,lnfqdsvwjyteogambzfzhirkvx,lnfqqsvwjyteogambzuchirgpo,lufqpsvwjythogambzuchirkpx,lnfqdsvwjyteogzmbzuchimkix,lnwqdspwjyteogambzcchirkpx,lnfqdsowjyteogambzuchigypx,lnfqdnvvjyteogambzucjirkpx,lnfjdsvwryteogambzuchirkcx,lnfqdsvwbyteogambzuchirfpb,lnfqdsvwjyheogambzxchprkpx,lnfqmsvwjytezgambzuchirlpx,lnaqdsvwjyteogamdzuzhirkpx,lnoqdsvwjytebgambfuchirkpx,lnfqdtvwjytvogambzuchirkpv',
        ['lnfqdscwjyteorambzuchirgpx', 'lnfqdscwjyteorambzuchzrgpx']
    ],
    ['abcde, fghij, klmno, pqrst, fguij, axcye, wvxyz', ['fghij', 'fguij']]
];
var IDsForCommonLetters = [
    [
        'lnfgdsywjyleogambzuchirkpx,nnfqdskfjyteogambzuchirkpx,lnfqdvvwjyteofambzuchirkpf,lnfqdsvwjyteogvmbzuthirkpn,ltfqdsvwjyoeogambxuchirkpx,lnfqcsvwjytzogacbzuchirkpx,lpfpdsvwjyteogambyuchirkpx,pnfqdsvwjyteogqmbzuchinkpx,lnfqdsvwjytyopambzpchirkpx,lnfqisswjyteogadbzuchirkpx,lnfqdsuwjcteogambzuchirepx,lnfqdovwjnteigambzuchirkpx,lnfbdsvwjxteogambzuchirkax,lnfqdsawjyteogamxzuchiwkpx,lncqdsvwjoteogambzuchirfpx,lnfadsrwjyteogambzuchirktx,lnfqdsvhjyteorazbzuchirkpx,lwfqdsvwjytdogambzuchirkhx,lnfqdhvwjyteogambzuhairkpx,lnfqdsvwjytlogambzgchyrkpx,lnfqdsvwjyteogamnzjwhirkpx,lnfodsvwjyteogahuzuchirkpx,lnfqdsvtjyteogamvzwchirkpx,lnfqdsvwjzueogambzuxhirkpx,lnfqxsvljytxogambzuchirkpx,lnfqdsvwjyteogambpyvhirkpx,lqzqdsvwjnteogambzuchirkpx,lnfqdsvwjyteogumbzichirapx,lnfqdbvwjytedgaubzuchirkpx,lnfqdsvwpyteogabbhuchirkpx,nnfqdsvwryteogambzuchiwkpx,lrfqdsvwjeteogambzuchhrkpx,lnfqdsvwxyteogamtzucyirkpx,lnfsdsvwjyteogambzulhirknx,lnfqdsvwjyreoyambzmchirkpx,ltfqdsvwjytdogkmbzuchirkpx,lnfqwbvcjyteogambzuchirkpx,lnfqdsvwjyteogamrzfchirmpx,lnfqdsvwjqteogambzucwirkpy,lnfqdslwjyfeogambzuchikkpx,lnfqdsvwjybeogambzuchikjpx,lofqysvwjyteogasbzuchirkpx,lnfqusvwjyteogambzucverkpx,lnfqdsvwjyteogaibzuchfrkzx,lnfqdsvwjyleogabbzuchirkcx,lnfqdsvqjyteogambzuchdqkpx,lnfqdsvwjwtewgambzuciirkpx,lnfqisvwjatwogambzuchirkpx,lnfqdgvwjyteogambzuchizkix,lnfqdsxwjyteogambyuehirkpx,lpffdsvwjyteogamrzuchirkpx,lnirdsvwjyteogambzuchirkbx,lnfqdsxdjyteogazbzuchirkpx,lnfgdgvwyyteogambzuchirkpx,lnfqxsvwjyteogambzmcwirkpx,lnxqjsvwjyteogambzuchirkqx,lnrqdsvwjpteogkmbzuchirkpx,lnfqdstwjyteoeahbzuchirkpx,lnfqdsvwtuteogambzuchixkpx,lwfqvsvwjyteogambzughirkpx,lnkqdsvwjyfeogambzuuhirkpx,lvvqdsvwjyteogambzuchirkpn,jndqdsvwjyteogzmbzuchirkpx,enfqdszwjyteogambcuchirkpx,lnfqdsvwiyteogakbauchirkpx,lnfqdsvwjyteogtmbzxcdirkpx,fnfqdswwjyteogawbzuchirkpx,lnfqdsvwjydejqambzuchirkpx,lnqqdsvwjyteogambzucbdrkpx,lnfqdsvwjyteogadbzuchirxcx,lnfqdslwjyyeogambzulhirkpx,lnfqdsvwjytecgambzucgirkpb,lbmqdsvwjyteogamkzuchirkpx,lbfqdsvrjyteogambzuchirapx,lnfqdsmwjyteogambzucfarkpx,lnfqasvwoyteofambzuchirkpx,bnfudsvwjyteogambzucharkpx,lnfrdsvwjytxogambzuchirkpg,lbfqdsvwjyteagambzucdirkpx,lxfqdsvwjytuogambzucjirkpx,lnfqdsvwjcteogamyzuchiikpx,lnfodsvwjyteognmbzuchirapx,ltfqdsvwjytedgaxbzuchirkpx,lnfqdshwjyteogambzucsilkpx,lnfqdsvwpyteohambzuchitkpx,wnzqdsvwjyteogambiuchirkpx,lnfqdsvwayteogambzhchirkpw,ltfqcsvwjrteogambzuchirkpx,lnfqdsvwaytekgamvzuchirkpx,lnfqdsvwjyteogambzokpirkpx,lnfqysbwjyeeogambzuchirkpx,lnsqdsvwjyteogambzuchikkpd,lrfqdsvwjyteogahbzochirkpx,lnfqdsvwjyreoggmbzuchjrkpx,lxfqdsvwjyteogkmbzuchirkpp,enhqdbvwjyteogambzuchirkpx,jnfqdsvwjyteogamczuuhirkpx,lnfqdsvwuyteogadbzuchirkpw,lnfqdsvjjytergambznchirkpx,lnfqdsvwjyteoglmbzuceijkpx,lwfqdsvwjyteogamieuchirkpx,lnfqdsvwjfaeogambzqchirkpx,lfbqdjvwjyteogambzuchirkpx,lnfqdsvwjxteoaambzuchirkpp,lnfqdsvwjyheogjmbzgchirkpx,lnfqdskwjyteonambzuchiikpx,lnfqdwvwjyteogambxuchirkph,pnfqdsvwdyteogambzuchihkpx,lnoqdsvwjyteogaybznchirkpx,lnfqdsvwfyxefgambzuchirkpx,lnfqdsvwjyteotamxzmchirkpx,lnfqdsvwjyteigwmbzuchivkpx,lnfqdsvwjytekgambcuchirkwx,lnfqdsvwjuteogamrzulhirkpx,lnfqdsvwjyteogambzucczrgpx,wnfqzsvwjyteogambduchirkpx,lnfqdsowjyteogambuuthirkpx,lnfqdsvrjyteogcmbzuclirkpx,knfqdsvwgyteogambzuchorkpx,lnaqdsvwjytuogdmbzuchirkpx,lnfrdsvwjyteogambluchigkpx,lnfqqzvwjyteogambzkchirkpx,lnfqdsvwjyteogamuzuchgrkux,lnfqdsvnjyteogxmbznchirkpx,lnfqdsvwjyteolajbzuchdrkpx,lnfqdsvwjypeoiagbzuchirkpx,lnrqdsvwjyteozamuzuchirkpx,lnfqdsvwjytkogaubzucqirkpx,lnkbdsvwjyteogacbzuchirkpx,unfqdsvwjybeogambwuchirkpx,lnfqfsvzjyteogambzuchiikpx,lnfqdsvgjyreogahbzuchirkpx,lnfqdsewjyteogavbeuchirkpx,lnfqdsvwjdteogambbuchidkpx,lnfqdsvwjythogambzcchirkvx,lnfqdscwjyteorambzuchirgpx,cnfqdzvwjyteogambzushirkpx,lnfgdsgwjytedgambzuchirkpx,lnfqdsvwbyteogimbzuchdrkpx,lnfqdsswjyteogambzuohbrkpx,lnfqdsvwjytqogabbzachirkpx,lnfqdsvwjyteogmmbzucqiukpx,lnfxdsrwjyteogambzuchnrkpx,lnfqnqvwjyteogambzuchiwkpx,lffqisvwjyteogambzulhirkpx,lnfqdsxwjydeogambzucfirkpx,lnfqdsvwjyteogambzucjirkrp,lnfqdsnqjyteogambduchirkpx,fnfqdmvwjyteogamlzuchirkpx,lnfqvsvwjyteooamdzuchirkpx,lnfqdsvcyyteogambzuchickpx,onfqdsvwjyqeogambzuchirqpx,znfqdcvwjyteoaambzuchirkpx,lnfqdsvwjzteogambzuchidklx,lnfqjsvwjyteogjmbzuchirkpv,lnfqdsvwjytgorambzuchirppx,lzfqdsvwpfteogambzuchirkpx,lnfidsfwjyteogapbzuchirkpx,lnfodsvwbyteobambzuchirkpx,lnlqdsvwjytefgambzuchfrkpx,lnkqdsvwjyteogambzkchgrkpx,tnfqdsvwjyteoiamhzuchirkpx,lnfqdsvwjyteogamllschirkpx,lnfqdsvwjmthogamizuchirkpx,lnfqdbvwjyteogafbzuchirkpb,lnfxosvwjyteogahbzuchirkpx,lnmqdsvwjyzeogambzuchirkcx,lnfqdevbjytxogambzuchirkpx,lnfqdsvwjyteogamzzudhipkpx,lnfqdszwjyteoqambzuchirkpp,lffqdsvwjyteogamtouchirkpx,lnfqdsvhjytfogambzucharkpx,hnfqdsvwjyteogembzschirkpx,lnfqdsvwjateogambzuchirmpa,lnfqdsvcjyteogambzocairkpx,lnfqdsvwjyteogamwzmchirkpd,lnfqzsvwjyteogdmbzuyhirkpx,lnfqdsvwjytfyglmbzuchirkpx,lnfndsvwjyteogambzuchirktf,gnfqdnvwjytevgambzuchirkpx,lnfqdsvwjyteoganbpuchorkpx,lnfpdsvwnyteogambzucqirkpx,fnfqdstejyteogambzuchirkpx,lnfqlsvwjyteowambzuchirkmx,lnfqdsvwjyteogmmdzuchtrkpx,lnfqdsvwcyteogaqbzuchirkqx,lnfqdsvwjytlogtmbzuchiwkpx,lnfqdsvwoyteogambzuczirkwx,lnfqdsvwjyteogzybzucdirkpx,lnfqdvvwjyteogumbzuchiukpx,lnfqbwvwjyteogambzuchjrkpx,lnfgdsvwjyteogambzvchirkzx,lnfqdsvwjvtjogambzuchiokpx,lnfedsvwjyteogambzuchivkph,lhfqusvwjytaogambzuchirkpx,lnfqdsvwjyteogacbzuihirkpv,lnfwdsvwjyteogambzucokrkpx,lnfqtsvwjpteognmbzuchirkpx,anfqdswwjyteogambzucairkpx,lnfqdsvwjyteorambzuchirlsx,lnfqdsvwjytgogambzychirkpc,lnfqdhvwjyteogambzachirklx,lnfwdsvwjyteogaobquchirkpx,rnfqdsvwjiteogambzuhhirkpx,lnfqdsuwjyemogambzuchirkpx,hnfqdsvwjyteogambzuchprfpx,anfqssvwjyteogambzumhirkpx,lnfkdsvwjyteogafbzqchirkpx,lnfqdsvwjyteogacqzuchirspx,lnfqdskwjyteggambzuchiakpx,lnnqdsvwjyteooambzuchihkpx,lnlqdsvjjyteogambzuchgrkpx,lnfqdsvwjyteogamszochirkex,lnfqbsvwjyteogambzqchirepx,lnfqdsbwjcteogambzhchirkpx,lnfqdwvzjyteogambzechirkpx,ynfadsvwdyteogambzuchirkpx,tnfqdsvwjytuogambzuohirkpx,lnfqdsvwjyteogambzaohivkpx,mnfqisvwjyteogagbzuchirkpx,lnfqbsvwjyueogambzuchirkhx,ynfqdsvwjyteogdmbzuchinkpx,lnfqdwhwjyteogambzuchirqpx,mnfqdsvwjyteogambzfchkrkpx,lnfqdsnwjyteogambzgchiqkpx,lnfqdsvwjytergambzuchiuklx,lnfqdqvjjyteogamtzuchirkpx,lnfqdscwjyteorambzuchzrgpx,enfqdevwjyteogaabzuchirkpx,gnfqdsvbjyteogambzuchirkph,lnfqdxvwjyteogambzubhixkpx,lnfqdsvwjyteogambojchihkpx,lnfqdsvwjytdogambzuzhilkpx,lnfqdsvwjyteogamezuqhirtpx,tnfhdsvwjyteogambzuvhirkpx,lnfzdsvwjnteogahbzuchirkpx,lnfqdsvwjyteogambzfzhirkvx,lnfqqsvwjyteogambzuchirgpo,lufqpsvwjythogambzuchirkpx,lnfqdsvwjyteogzmbzuchimkix,lnwqdspwjyteogambzcchirkpx,lnfqdsowjyteogambzuchigypx,lnfqdnvvjyteogambzucjirkpx,lnfjdsvwryteogambzuchirkcx,lnfqdsvwbyteogambzuchirfpb,lnfqdsvwjyheogambzxchprkpx,lnfqmsvwjytezgambzuchirlpx,lnaqdsvwjyteogamdzuzhirkpx,lnoqdsvwjytebgambfuchirkpx,lnfqdtvwjytvogambzuchirkpv',
        'lnfqdscwjyteorambzuchrgpx'
    ],
    ['abcde, fghij, klmno, pqrst, fguij, axcye, wvxyz', 'fgij']
];
test.each(IDsForAlmostEqualIDs)('%s have two IDs %p that differ by exactly one character in the same position', function (ids, expected) {
    expect(_02_1.reduceCommonList(0, utils_1.formatInputString(ids))).toEqual(expected);
});
test.each(IDsForCommonLetters)('%s have two IDs that have common letters %s', function (ids, expected) {
    expect(_02_1.calculateCommonLetters(ids)).toBe(expected);
});
