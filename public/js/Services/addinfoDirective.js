define(['appModule'], function(app) {
    app.directive('addinfoForm', function() {

        return {
            restrict: 'A',
            /**
             * @description:
             * Scope linked the functions/attributes between controller and this directive.
             */
            scope: {
                userNewAddinfo: "=myNewattribute",
                control: "=myControl",
                userAdditionalInfo: "=myAddinfoattribute",
                addAddinfo: "&myAddinfo",
                toggleAddinfoForm: "&myToggleform",
                toggleEditBtn: "&myToggleinfobtn",
                toggleAddInfo: "&myToggleinfo"
            },
            /**
             * @description:
             * Link the html document that will be control by this directive.
             */
            templateUrl: '/NewResume/App/Views/resume/addinfoForm.html',
            link: function(scope) {
                scope.aInfoFControl = scope.control || {};

                scope.aInfoFControl.cancelAddinfo = function() {
                    scope.cancelAddinfoEdit();
                };
                /**
                 * @description:
                 * This function let the previewController to pass the education that need to be edit. All the data will loop into the edit form through the passing method.
                 */
                scope.aInfoFControl.getUserAddinfo = function() {
                    scope.expectedSalaryc = scope.userAdditionalInfo[0].expectedSalary;
                    $("#expectedCSelect").select2("val", scope.userAdditionalInfo[0].expectedCurrency);
                    scope.salaryCurrencyc = scope.userAdditionalInfo[0].expectedCurrency;
                    $("#aInfoSelectOne").select2("val", scope.userAdditionalInfo[0].preferredWorkLocationOne);
                    scope.pLocationOnec = scope.userAdditionalInfo[0].preferredWorkLocationOne;
                    $("#aInfoSelectTwo").select2("val", scope.userAdditionalInfo[0].preferredWorkLocationTwo);
                    scope.pLocationTwoc = scope.userAdditionalInfo[0].preferredWorkLocationTwo;
                    $("#aInfoSelectThree").select2("val", scope.userAdditionalInfo[0].preferredWorkLocationThree);
                    scope.pLocationThreec = scope.userAdditionalInfo[0].preferredWorkLocationThree;
                    if (scope.userAdditionalInfo[0].workingOverSea === "Yes") {
                        $("#overSeac").prop("checked", true);
                    } else {
                        $("#overSeac").prop("checked", false);
                    }
                    scope.otherinfoc = scope.userAdditionalInfo[0].otherInformation;
                    scope.toggleAddinfoForm();
                    scope.toggleEditBtn();
                    scope.toggleAddInfo();
                };
                /**
                 * @description:
                 * Function used to add newly created Additinal Information.
                 */
                scope.addNewAddinfo = function() {
                    document.getElementById("expectedCSelect").value;
                    scope.userNewAddinfo.expectedCurrency = scope.salaryCurrencyc;
                    scope.userNewAddinfo.expectedSalary = scope.expectedSalaryc;
                    scope.userNewAddinfo.preferredWorkLocationOne = scope.pLocationOnec;
                    scope.userNewAddinfo.preferredWorkLocationTwo = scope.pLocationTwoc;
                    scope.userNewAddinfo.preferredWorkLocationThree = scope.pLocationThreec;
                    if (document.getElementById("overSeac").checked === true) {
                        scope.userNewAddinfo.workingOverSea = 'Yes';

                    } else {
                        scope.userNewAddinfo.workingOverSea = '';
                    }

                    scope.userNewAddinfo.otherInformation = scope.otherinfoc;

                    scope.addAddinfo();
                    scope.cancelAddinfoEdit();
                };
                /**
                 * @description:
                 * Cancel the edit/add form. All data field will be reset.
                 */
                scope.cancelAddinfoEdit = function() {
                    scope.expectedSalaryc = '';
                    $("#expectedCSelect").select2("val", "");
                    scope.salaryCurrencyc = '';
                    $("#aInfoSelectOne").select2("val", "");
                    scope.pLocationOnec = '';
                    $("#aInfoSelectTwo").select2("val", "");
                    scope.pLocationTwoc = '';
                    $("#aInfoSelectThree").select2("val", "");
                    scope.pLocationThreec = '';
                    $("#overSeac").prop("checked", false);
                    scope.achievementc = "";
                    scope.toggleAddinfoForm();
                    scope.toggleEditBtn();
                    scope.toggleAddInfo();
                };

                /**
                 * @description:
                 * All the select2 bind data options. **Can be change/delete.**
                 */
                scope.dtPLocation = [
                    {
                        id: 'Malaysia',
                        text: 'Malaysia'
                    },
                    {
                        id: 'Singapore',
                        text: 'Singapore'
                    }
                ];
                scope.dtCurrency = [
                    {
                        id: 'AUD',
                        text: 'AUD'
                    },
                    {
                        id: 'AUD',
                        text: 'AUD'
                    },
                    {
                        id: 'BDT',
                        text: 'BDT'
                    },
                    {
                        id: 'CNY',
                        text: 'CNY'
                    },
                    {
                        id: 'EUR',
                        text: 'EUR'
                    },
                    {
                        id: 'GBP',
                        text: 'GBP'
                    },
                    {
                        id: 'HKD',
                        text: 'HKD'
                    },
                    {
                        id: 'IDR',
                        text: 'IDR'
                    },
                    {
                        id: 'INR',
                        text: 'INR'
                    },
                    {
                        id: 'JPY',
                        text: 'JPY'
                    },
                    {
                        id: 'MOP',
                        text: 'MOP'
                    },
                    {
                        id: 'MYR',
                        text: 'MYR'
                    },
                    {
                        id: 'NZD',
                        text: 'NZD'
                    },
                    {
                        id: 'PHP',
                        text: 'PHP'
                    },
                    {
                        id: 'SGD',
                        text: 'SGD'
                    },
                    {
                        id: 'THB',
                        text: 'THB'
                    },
                    {
                        id: 'USD',
                        text: 'USD'
                    },
                    {
                        id: 'VND',
                        text: 'VND'
                    }
                ];

                scope.dtWorkLocation = [
                    {
                        value: 'ctry_50000',
                        text: '*****SelectWorkLocationsinMalaysia*****'
                    },
                    {
                        value: '50000',
                        text: 'Anywhere in Malaysia'
                    },
                    {
                        value: '50100',
                        text: 'Johor'
                    },
                    {
                        value: '50200',
                        text: 'Kedah'
                    },
                    {
                        value: '50300',
                        text: 'Kuala Lumpur'
                    },
                    {
                        value: '50400',
                        text: 'Kelantan'
                    },
                    {
                        value: '50500',
                        text: 'Melaka'
                    },
                    {
                        value: '50600',
                        text: 'Negeri Sembilan'
                    },
                    {
                        value: '50700',
                        text: 'Penang'
                    },
                    {
                        value: '50800',
                        text: 'Pahang'
                    },
                    {
                        value: '50900',
                        text: 'Perak'
                    },
                    {
                        value: '51000',
                        text: 'Perlis'
                    },
                    {
                        value: '51600',
                        text: 'Putrajaya'
                    },
                    {
                        value: '51100',
                        text: 'Sabah'
                    },
                    {
                        value: '51200',
                        text: 'Selangor'
                    },
                    {
                        value: '51300',
                        text: 'Sarawak'
                    },
                    {
                        value: '51400',
                        text: 'Terengganu'
                    },
                    {
                        value: '51500',
                        text: 'Labuan'
                    },
                    {
                        value: 'ctry_70000',
                        text: '*****Select Work Locations in Singapore*****'
                    },
                    {
                        value: '70000',
                        text: 'Anywhere in Singapore'
                    },
                    {
                        value: 'ctry_60000',
                        text: '*****Select Work Locations in Philippines*****'
                    },
                    {
                        value: '60000',
                        text: 'Anywhere in Philippines'
                    },
                    {
                        value: '60100',
                        text: 'Armm'
                    },
                    {
                        value: '60200',
                        text: 'BicolRegion'
                    },
                    {
                        value: '60300',
                        text: 'C.A.R'
                    },
                    {
                        value: '60400',
                        text: 'Cagayan valley'
                    },
                    {
                        value: '61400',
                        text: 'Calabarzon&amp;Mimaropa'
                    },
                    {
                        value: '60500',
                        text: 'CentralLuzon'
                    },
                    {
                        value: '60700',
                        text: 'Caraga'
                    },
                    {
                        value: '60800',
                        text: 'Central visayas'
                    },
                    {
                        value: '61300',
                        text: 'Davao'
                    },
                    {
                        value: '60900',
                        text: 'Eastern visayas'
                    },
                    {
                        value: '61000',
                        text: 'IlocosRegion'
                    },
                    {
                        value: '61100',
                        text: 'NationalCapitalReg'
                    },
                    {
                        value: '61200',
                        text: 'NorthernMindanao'
                    },
                    {
                        value: '60600',
                        text: 'Soccsksargen'
                    },
                    {
                        value: '61600',
                        text: 'Western visayas'
                    },
                    {
                        value: '61500',
                        text: 'Zamboanga'
                    },
                    {
                        value: 'ctry_30000',
                        text: '*****SelectWorkLocationsinIndonesia*****'
                    },
                    {
                        value: '30000',
                        text: 'Anywhere in Indonesia'
                    },
                    {
                        value: '30100',
                        text: 'Aceh'
                    },
                    {
                        value: '30200',
                        text: 'Bali'
                    },
                    {
                        value: '32800',
                        text: 'BangkaBelitung'
                    },
                    {
                        value: '32900',
                        text: 'Banten'
                    },
                    {
                        value: '30300',
                        text: 'Bengkulu'
                    },
                    {
                        value: '33000',
                        text: 'Gorontalo'
                    },
                    {
                        value: '30500',
                        text: 'JakartaRaya'
                    },
                    {
                        value: '30600',
                        text: 'Jambi'
                    },
                    {
                        value: '30700',
                        text: 'JawaBarat'
                    },
                    {
                        value: '30800',
                        text: 'JawaTengah'
                    },
                    {
                        value: '30900',
                        text: 'JawaTimur'
                    },
                    {
                        value: '31000',
                        text: 'KalimantanBarat'
                    },
                    {
                        value: '31100',
                        text: 'KalimantanSelatan'
                    },
                    {
                        value: '31200',
                        text: 'KalimantanTengah'
                    },
                    {
                        value: '31300',
                        text: 'KalimantanTimur'
                    },
                    {
                        value: '33200',
                        text: 'KepulauanRiau'
                    },
                    {
                        value: '31400',
                        text: 'Lampung'
                    },
                    {
                        value: '31500',
                        text: 'Maluku'
                    },
                    {
                        value: '33100',
                        text: 'MalukuUtara'
                    },
                    {
                        value: '31600',
                        text: 'NusaTenggaraBarat'
                    },
                    {
                        value: '31700',
                        text: 'NusaTenggaraTimur'
                    },
                    {
                        value: '30400',
                        text: 'Papua'
                    },
                    {
                        value: '33300',
                        text: 'PapuaBarat'
                    },
                    {
                        value: '31800',
                        text: 'Riau'
                    },
                    {
                        value: '33400',
                        text: 'SulawesiBarat'
                    },
                    {
                        value: '31900',
                        text: 'SulawesiSelatan'
                    },
                    {
                        value: '32000',
                        text: 'SulawesiTengah'
                    },
                    {
                        value: '32100',
                        text: 'SulawesiTenggara'
                    },
                    {
                        value: '32200',
                        text: 'SulawesiUtara'
                    },
                    {
                        value: '32300',
                        text: 'SumateraBarat'
                    },
                    {
                        value: '32400',
                        text: 'SumateraSelatan'
                    },
                    {
                        value: '32500',
                        text: 'SumateraUtara'
                    },
                    {
                        value: '32700',
                        text: 'Yogyakarta'
                    },
                    {
                        value: 'ctry_80000',
                        text: '*****SelectWorkLocationsinThailand*****'
                    },
                    {
                        value: '80000',
                        text: 'AnywhereinThailand'
                    },
                    {
                        value: '80800',
                        text: 'AnywhereinBangkok'
                    },
                    {
                        value: '80801',
                        text: 'Bangkok-BangBon'
                    },
                    {
                        value: '80802',
                        text: 'Bangkok-BangKapi'
                    },
                    {
                        value: '80803',
                        text: 'Bangkok-BangKhae'
                    },
                    {
                        value: '80804',
                        text: 'Bangkok-BangKhen'
                    },
                    {
                        value: '80805',
                        text: 'Bangkok-BangKhoLaem'
                    },
                    {
                        value: '80806',
                        text: 'Bangkok-BangKhunThian'
                    },
                    {
                        value: '80807',
                        text: 'Bangkok-BangNa'
                    },
                    {
                        value: '80808',
                        text: 'Bangkok-BangPhlad'
                    },
                    {
                        value: '80809',
                        text: 'Bangkok-BangRak'
                    },
                    {
                        value: '80810',
                        text: 'Bangkok-BangSue'
                    },
                    {
                        value: '80811',
                        text: 'Bangkok-BangkokNoi'
                    },
                    {
                        value: '80812',
                        text: 'Bangkok-BangkokYai'
                    },
                    {
                        value: '80813',
                        text: 'Bangkok-BungKum'
                    },
                    {
                        value: '80814',
                        text: 'Bangkok-Chatuchak'
                    },
                    {
                        value: '80815',
                        text: 'Bangkok-ChomThong'
                    },
                    {
                        value: '80816',
                        text: 'Bangkok-DinDaeng'
                    },
                    {
                        value: '80817',
                        text: 'Bangkok-DonMuang'
                    },
                    {
                        value: '80818',
                        text: 'Bangkok-Dusit'
                    },
                    {
                        value: '80819',
                        text: 'Bangkok-HuaiKhwang'
                    },
                    {
                        value: '80820',
                        text: 'Bangkok-KanNaYao'
                    },
                    {
                        value: '80821',
                        text: 'Bangkok-KhlongSamWa'
                    },
                    {
                        value: '80822',
                        text: 'Bangkok-KhlongSan'
                    },
                    {
                        value: '80823',
                        text: 'Bangkok-KhlongToei'
                    },
                    {
                        value: '80824',
                        text: 'Bangkok-LadKrabang'
                    },
                    {
                        value: '80825',
                        text: 'Bangkok-LadPhrao'
                    },
                    {
                        value: '80826',
                        text: 'Bangkok-LakSi'
                    },
                    {
                        value: '80827',
                        text: 'Bangkok-MinBuri'
                    },
                    {
                        value: '80828',
                        text: 'Bangkok-NongChok'
                    },
                    {
                        value: '80829',
                        text: 'Bangkok-NongKhaem'
                    },
                    {
                        value: '80830',
                        text: 'Bangkok-PathumWan'
                    },
                    {
                        value: '80831',
                        text: 'Bangkok-PhasiCharoen'
                    },
                    {
                        value: '80832',
                        text: 'Bangkok-PhayaThai'
                    },
                    {
                        value: '80833',
                        text: 'Bangkok-PhraKanong'
                    },
                    {
                        value: '80834',
                        text: 'Bangkok-PhraNakhon'
                    },
                    {
                        value: '80835',
                        text: 'Bangkok-PomPrap SattruPhai'
                    },
                    {
                        value: '80836',
                        text: 'Bangkok-Pravet'
                    },
                    {
                        value: '80837',
                        text: 'Bangkok-RatBurana'
                    },
                    {
                        value: '80838',
                        text: 'Bangkok-Ratchatewi'
                    },
                    {
                        value: '80839',
                        text: 'Bangkok-SaiMai'
                    },
                    {
                        value: '80840',
                        text: 'Bangkok-Samphantawong'
                    },
                    {
                        value: '80841',
                        text: 'Bangkok-SaphanSung'
                    },
                    {
                        value: '80842',
                        text: 'Bangkok-Sathon'
                    },
                    {
                        value: '80843',
                        text: 'Bangkok-SuanLuang'
                    },
                    {
                        value: '80844',
                        text: 'Bangkok-TalingChan'
                    },
                    {
                        value: '80845',
                        text: 'Bangkok-ThawiWatthana'
                    },
                    {
                        value: '80846',
                        text: 'Bangkok-ThonBuri'
                    },
                    {
                        value: '80847',
                        text: 'Bangkok-ThungKhru'
                    },
                    {
                        value: '80848',
                        text: 'Bangkok-vadhana'
                    },
                    {
                        value: '80849',
                        text: 'Bangkok-WangThonglang'
                    },
                    {
                        value: '80850',
                        text: 'Bangkok-YanNawa'
                    },
                    {
                        value: '84000',
                        text: 'AnywhereinNonthaburi'
                    },
                    {
                        value: '84001',
                        text: 'Nonthaburi-BangBuaThong'
                    },
                    {
                        value: '84002',
                        text: 'Nonthaburi-BangKruai'
                    },
                    {
                        value: '84003',
                        text: 'Nonthaburi-BangYai'
                    },
                    {
                        value: '84004',
                        text: 'Nonthaburi-MueangNonthaburi'
                    },
                    {
                        value: '84005',
                        text: 'Nonthaburi-PakKret'
                    },
                    {
                        value: '84006',
                        text: 'Nonthaburi-SaiNoi'
                    },
                    {
                        value: '86100',
                        text: 'AnywhereinSamutPrakan'
                    },
                    {
                        value: '86101',
                        text: 'SamutPrakan-BangBo'
                    },
                    {
                        value: '86102',
                        text: 'SamutPrakan-BangPhli'
                    },
                    {
                        value: '86103',
                        text: 'SamutPrakan-BangSaoThong'
                    },
                    {
                        value: '86104',
                        text: 'SamutPrakan-MueangSamutPrakan'
                    },
                    {
                        value: '86105',
                        text: 'SamutPrakan-PhraPradaeng'
                    },
                    {
                        value: '86106',
                        text: 'SamutPrakan-PhraSamutChedi'
                    },
                    {
                        value: '84100',
                        text: 'AlljobsinPathumThani'
                    },
                    {
                        value: '84101',
                        text: 'PathumThani-KhlongLuang'
                    },
                    {
                        value: '84102',
                        text: 'PathumThani-LamLukKa'
                    },
                    {
                        value: '84103',
                        text: 'PathumThani-LatLumKaeo'
                    },
                    {
                        value: '84104',
                        text: 'PathumThani-MueangPathumThani'
                    },
                    {
                        value: '84105',
                        text: 'PathumThani-NongSuea'
                    },
                    {
                        value: '84106',
                        text: 'PathumThani-SamKhok'
                    },
                    {
                        value: '84107',
                        text: 'PathumThani-Thanyaburi'
                    },
                    {
                        value: '80700',
                        text: 'AngThong'
                    },
                    {
                        value: '80900',
                        text: 'BuriRam'
                    },
                    {
                        value: '81000',
                        text: 'ChaChoengSao'
                    },
                    {
                        value: '81100',
                        text: 'ChaiNat'
                    },
                    {
                        value: '81200',
                        text: 'Chaiyaphum'
                    },
                    {
                        value: '81300',
                        text: 'Chanthaburi'
                    },
                    {
                        value: '81400',
                        text: 'ChiangMai'
                    },
                    {
                        value: '81500',
                        text: 'ChiangRai'
                    },
                    {
                        value: '81600',
                        text: 'ChonBuri'
                    },
                    {
                        value: '81700',
                        text: 'Chumphon'
                    },
                    {
                        value: '81800',
                        text: 'Kalasin'
                    },
                    {
                        value: '81900',
                        text: 'KamphaengPhet'
                    },
                    {
                        value: '82000',
                        text: 'Kanchanaburi'
                    },
                    {
                        value: '82100',
                        text: 'KhonKaen'
                    },
                    {
                        value: '82200',
                        text: 'Krabi'
                    },
                    {
                        value: '82300',
                        text: 'Lampang'
                    },
                    {
                        value: '82400',
                        text: 'Lamphun'
                    },
                    {
                        value: '82500',
                        text: 'Loei'
                    },
                    {
                        value: '82600',
                        text: 'LopBuri'
                    },
                    {
                        value: '82700',
                        text: 'MaeHongSon'
                    },
                    {
                        value: '82800',
                        text: 'MahaSarakham'
                    },
                    {
                        value: '82900',
                        text: 'Mukdahan'
                    },
                    {
                        value: '83000',
                        text: 'NakhonNayok'
                    },
                    {
                        value: '83200',
                        text: 'NakhonPhanom'
                    },
                    {
                        value: '83300',
                        text: 'NakhonRatchasima'
                    },
                    {
                        value: '83100',
                        text: 'NakhonPathom'
                    },
                    {
                        value: '83400',
                        text: 'NakhonSawan'
                    },
                    {
                        value: '83500',
                        text: 'NakhonSiThammarat'
                    },
                    {
                        value: '83600',
                        text: 'Nan'
                    },
                    {
                        value: '83700',
                        text: 'Narathiwat'
                    },
                    {
                        value: '83800',
                        text: 'NongbuaLumphoo'
                    },
                    {
                        value: '83900',
                        text: 'NongKhai'
                    },
                    {
                        value: '84200',
                        text: 'Pattani'
                    },
                    {
                        value: '84300',
                        text: 'PhangNga'
                    },
                    {
                        value: '84400',
                        text: 'Phatthalung'
                    },
                    {
                        value: '84500',
                        text: 'Phayao'
                    },
                    {
                        value: '84600',
                        text: 'Phetchabun'
                    },
                    {
                        value: '84700',
                        text: 'Phetchaburi'
                    },
                    {
                        value: '84800',
                        text: 'Phichit'
                    },
                    {
                        value: '84900',
                        text: 'Phitsanulok'
                    },
                    {
                        value: '85000',
                        text: 'PhraNakhonSiAyuttaya'
                    },
                    {
                        value: '85100',
                        text: 'Phrae'
                    },
                    {
                        value: '85200',
                        text: 'Phuket'
                    },
                    {
                        value: '85300',
                        text: 'PrachinBuri'
                    },
                    {
                        value: '85400',
                        text: 'PrachuapKhiriKhan'
                    },
                    {
                        value: '85500',
                        text: 'Ranong'
                    },
                    {
                        value: '85600',
                        text: 'Ratchaburi'
                    },
                    {
                        value: '85700',
                        text: 'Rayong'
                    },
                    {
                        value: '85800',
                        text: 'RoiEt'
                    },
                    {
                        value: '85900',
                        text: 'SaKaew'
                    },
                    {
                        value: '86000',
                        text: 'SakonNakhon'
                    },
                    {
                        value: '86200',
                        text: 'SamutSakhon'
                    },
                    {
                        value: '86300',
                        text: 'SamutSongkhram'
                    },
                    {
                        value: '86400',
                        text: 'Saraburi'
                    },
                    {
                        value: '86500',
                        text: 'Satun'
                    },
                    {
                        value: '86600',
                        text: 'SiSaKet'
                    },
                    {
                        value: '86700',
                        text: 'SingBuri'
                    },
                    {
                        value: '86800',
                        text: 'SongKhla'
                    },
                    {
                        value: '86900',
                        text: 'Sukhothai'
                    },
                    {
                        value: '87000',
                        text: 'SuphanBuri'
                    },
                    {
                        value: '87100',
                        text: 'SuratThani'
                    },
                    {
                        value: '87200',
                        text: 'Surin'
                    },
                    {
                        value: '87300',
                        text: 'Tak'
                    },
                    {
                        value: '87400',
                        text: 'Trang'
                    },
                    {
                        value: '87500',
                        text: 'Trat'
                    },
                    {
                        value: '87600',
                        text: 'UbonRatchathani'
                    },
                    {
                        value: '87700',
                        text: 'UdonThani'
                    },
                    {
                        value: '80600',
                        text: 'UmnadChareun'
                    },
                    {
                        value: '87800',
                        text: 'UthaiThani'
                    },
                    {
                        value: '87900',
                        text: 'Uttaradit'
                    },
                    {
                        value: '88000',
                        text: 'Yala'
                    },
                    {
                        value: '88100',
                        text: 'Yasothon'
                    },
                    {
                        value: 'ctry_110000',
                        text: '*****SelectWorkLocationsinvietnam*****'
                    },
                    {
                        value: '110000',
                        text: 'Anywhereinvietnam'
                    },
                    {
                        value: '110101',
                        text: 'AnGiang'
                    },
                    {
                        value: '110102',
                        text: 'BaRia-VungTau'
                    },
                    {
                        value: '110103',
                        text: 'BacCan'
                    },
                    {
                        value: '110104',
                        text: 'BacGiang'
                    },
                    {
                        value: '110105',
                        text: 'BacLieu'
                    },
                    {
                        value: '110106',
                        text: 'BacNinh'
                    },
                    {
                        value: '110107',
                        text: 'BenTre'
                    },
                    {
                        value: '110108',
                        text: 'BinhDinh'
                    },
                    {
                        value: '110109',
                        text: 'BinhDuong'
                    },
                    {
                        value: '110110',
                        text: 'BinhPhuoc'
                    },
                    {
                        value: '110111',
                        text: 'BinhThuan'
                    },
                    {
                        value: '110112',
                        text: 'CaMau'
                    },
                    {
                        value: '110113',
                        text: 'CanTho'
                    },
                    {
                        value: '110114',
                        text: 'CaoBang'
                    },
                    {
                        value: '110115',
                        text: 'DaNang'
                    },
                    {
                        value: '110116',
                        text: 'DacLac'
                    },
                    {
                        value: '110163',
                        text: 'DienBien'
                    },
                    {
                        value: '110168',
                        text: 'DakNong'
                    },
                    {
                        value: '110117',
                        text: 'DongNai'
                    },
                    {
                        value: '110118',
                        text: 'DongThap'
                    },
                    {
                        value: '110119',
                        text: 'GiaLai'
                    },
                    {
                        value: '110120',
                        text: 'HaGiang'
                    },
                    {
                        value: '110121',
                        text: 'HaNam'
                    },
                    {
                        value: '110122',
                        text: 'HaNoi'
                    },
                    {
                        value: '110123',
                        text: 'HaTay'
                    },
                    {
                        value: '110124',
                        text: 'HaTinh'
                    },
                    {
                        value: '110125',
                        text: 'HaiDuong'
                    },
                    {
                        value: '110126',
                        text: 'HaiPhong'
                    },
                    {
                        value: '110167',
                        text: 'HauGiang'
                    },
                    {
                        value: '110127',
                        text: 'HoChiMinhCity'
                    },
                    {
                        value: '110128',
                        text: 'HoaBinh'
                    },
                    {
                        value: '110129',
                        text: 'HungYen'
                    },
                    {
                        value: '110130',
                        text: 'KhanhHoa'
                    },
                    {
                        value: '110131',
                        text: 'KienGiang'
                    },
                    {
                        value: '110132',
                        text: 'KonTum'
                    },
                    {
                        value: '110133',
                        text: 'LaiChau'
                    },
                    {
                        value: '110134',
                        text: 'LamDong'
                    },
                    {
                        value: '110135',
                        text: 'LangSon'
                    },
                    {
                        value: '110136',
                        text: 'LaoCai'
                    },
                    {
                        value: '110137',
                        text: 'LongAn'
                    },
                    {
                        value: '110138',
                        text: 'NamDinh'
                    },
                    {
                        value: '110139',
                        text: 'NgheAn'
                    },
                    {
                        value: '110140',
                        text: 'NinhBinh'
                    },
                    {
                        value: '110141',
                        text: 'NinhThuan'
                    },
                    {
                        value: '110142',
                        text: 'PhuTho'
                    },
                    {
                        value: '110143',
                        text: 'PhuYen'
                    },
                    {
                        value: '110144',
                        text: 'QuangBinh'
                    },
                    {
                        value: '110145',
                        text: 'QuangNam'
                    },
                    {
                        value: '110146',
                        text: 'QuangNgai'
                    },
                    {
                        value: '110147',
                        text: 'QuangNinh'
                    },
                    {
                        value: '110148',
                        text: 'QuangTri'
                    },
                    {
                        value: '110149',
                        text: 'SocTrang'
                    },
                    {
                        value: '110150',
                        text: 'SonLa'
                    },
                    {
                        value: '110151',
                        text: 'TayNinh'
                    },
                    {
                        value: '110152',
                        text: 'ThaiBinh'
                    },
                    {
                        value: '110153',
                        text: 'ThaiNguyen'
                    },
                    {
                        value: '110154',
                        text: 'ThanhHoa'
                    },
                    {
                        value: '110155',
                        text: 'ThuaThien-Hue'
                    },
                    {
                        value: '110156',
                        text: 'TienGiang'
                    },
                    {
                        value: '110157',
                        text: 'Travinh'
                    },
                    {
                        value: '110158',
                        text: 'TuyenQuang'
                    },
                    {
                        value: '110159',
                        text: 'vinhLong'
                    },
                    {
                        value: '110160',
                        text: 'vinhPhuc'
                    },
                    {
                        value: '110161',
                        text: 'YenBai'
                    },
                    {
                        value: 'ctry_40000',
                        text: '*****SelectWorkLocationsinIndia*****'
                    },
                    {
                        value: '40000',
                        text: 'AnywhereinIndia'
                    },
                    {
                        value: '40100',
                        text: 'Andaman&amp;Nicobar'
                    },
                    {
                        value: '40200',
                        text: 'AnywhereinAndhraPradesh'
                    },
                    {
                        value: '40205',
                        text: 'AndhraPradesh-Anantapur'
                    },
                    {
                        value: '40206',
                        text: 'AndhraPradesh-Guntakal'
                    },
                    {
                        value: '40207',
                        text: 'AndhraPradesh-Guntur'
                    },
                    {
                        value: '40210',
                        text: 'AndhraPradesh-Hyderabad/Secunderabad'
                    },
                    {
                        value: '40211',
                        text: 'AndhraPradesh-Kakinada'
                    },
                    {
                        value: '40212',
                        text: 'AndhraPradesh-Kurnool'
                    },
                    {
                        value: '40213',
                        text: 'AndhraPradesh-Nellore'
                    },
                    {
                        value: '40214',
                        text: 'AndhraPradesh-Nizamabad'
                    },
                    {
                        value: '40215',
                        text: 'AndhraPradesh-Rajahmundry'
                    },
                    {
                        value: '40216',
                        text: 'AndhraPradesh-Tirupati'
                    },
                    {
                        value: '40220',
                        text: 'AndhraPradesh-visakhapatnam'
                    },
                    {
                        value: '40230',
                        text: 'AndhraPradesh-vijayawada'
                    },
                    {
                        value: '40231',
                        text: 'AndhraPradesh-Warangal'
                    },
                    {
                        value: '40300',
                        text: 'AnywhereinAssam'
                    },
                    {
                        value: '40310',
                        text: 'Assam-Gauhati'
                    },
                    {
                        value: '40320',
                        text: 'Assam-Silchar'
                    },
                    {
                        value: '40400',
                        text: 'AnywhereinArunachalPradesh'
                    },
                    {
                        value: '40410',
                        text: 'ArunachalPradesh-Itanagar'
                    },
                    {
                        value: '40500',
                        text: 'AnywhereinBihar'
                    },
                    {
                        value: '40505',
                        text: 'Bihar-Bahgalpur'
                    },
                    {
                        value: '40510',
                        text: 'Bihar-Patna'
                    },
                    {
                        value: '40600',
                        text: 'Chandigarh'
                    },
                    {
                        value: '40700',
                        text: 'Daman&amp;Diu'
                    },
                    {
                        value: '40800',
                        text: 'Delhi'
                    },
                    {
                        value: '40900',
                        text: 'Dadra&amp;NagarHaveli'
                    },
                    {
                        value: '41000',
                        text: 'AnywhereinGoa'
                    },
                    {
                        value: '41010',
                        text: 'Goa-Panjim/Panaji'
                    },
                    {
                        value: '41020',
                        text: 'Goa-vascoDaGama'
                    },
                    {
                        value: '41099',
                        text: 'Goa-Other'
                    },
                    {
                        value: '41100',
                        text: 'AnywhereinGujarat'
                    },
                    {
                        value: '41110',
                        text: 'Gujarat-Ahmedabad'
                    },
                    {
                        value: '41111',
                        text: 'Gujarat-Anand'
                    },
                    {
                        value: '41112',
                        text: 'Gujarat-Ankleshwar'
                    },
                    {
                        value: '41113',
                        text: 'Gujarat-Bharuch'
                    },
                    {
                        value: '41114',
                        text: 'Gujarat-Bhavnagar'
                    },
                    {
                        value: '41115',
                        text: 'Gujarat-Bhuj'
                    },
                    {
                        value: '41116',
                        text: 'Gujarat-Gandhinagar'
                    },
                    {
                        value: '41117',
                        text: 'Gujarat-Gir'
                    },
                    {
                        value: '41118',
                        text: 'Gujarat-Jamnagar'
                    },
                    {
                        value: '41119',
                        text: 'Gujarat-Kandla'
                    },
                    {
                        value: '41121',
                        text: 'Gujarat-Porbandar'
                    },
                    {
                        value: '41122',
                        text: 'Gujarat-Rajkot'
                    },
                    {
                        value: '41123',
                        text: 'Gujarat-Surat'
                    },
                    {
                        value: '41120',
                        text: 'Gujarat-vadodara'
                    },
                    {
                        value: '41124',
                        text: 'Gujarat-valsad'
                    },
                    {
                        value: '41125',
                        text: 'Gujarat-vapi'
                    },
                    {
                        value: '41200',
                        text: 'AnywhereinHaryana'
                    },
                    {
                        value: '41201',
                        text: 'Haryana-Ambala'
                    },
                    {
                        value: '41202',
                        text: 'Haryana-Faridabad'
                    },
                    {
                        value: '41203',
                        text: 'Haryana-Gurgaon'
                    },
                    {
                        value: '41204',
                        text: 'Haryana-Hisar'
                    },
                    {
                        value: '41205',
                        text: 'Haryana-Karnal'
                    },
                    {
                        value: '41206',
                        text: 'Haryana-Kurukshetra'
                    },
                    {
                        value: '41210',
                        text: 'Haryana-Panipat'
                    },
                    {
                        value: '41211',
                        text: 'Haryana-Rohtak'
                    },
                    {
                        value: '41300',
                        text: 'AnywhereinHimachalPradesh'
                    },
                    {
                        value: '41301',
                        text: 'HimachalPradesh-Dalhousie'
                    },
                    {
                        value: '41302',
                        text: 'HimachalPradesh-Dharmasala'
                    },
                    {
                        value: '41303',
                        text: 'HimachalPradesh-Kulu/Manali'
                    },
                    {
                        value: '41304',
                        text: 'HimachalPradesh-Shimla'
                    },
                    {
                        value: '41400',
                        text: 'AnywhereinJammu&amp;Kashmir'
                    },
                    {
                        value: '41401',
                        text: 'Jammu&amp;Kashmir-Jammu'
                    },
                    {
                        value: '41402',
                        text: 'Jammu&amp;Kashmir-Srinagar'
                    },
                    {
                        value: '41500',
                        text: 'AnywhereinKarnataka'
                    },
                    {
                        value: '41510',
                        text: 'Karnataka-Bangalore'
                    },
                    {
                        value: '41511',
                        text: 'Karnataka-Belgaum'
                    },
                    {
                        value: '41512',
                        text: 'Karnataka-Bellary'
                    },
                    {
                        value: '41513',
                        text: 'Karnataka-Bidar'
                    },
                    {
                        value: '41514',
                        text: 'Karnataka-Dharwad'
                    },
                    {
                        value: '41515',
                        text: 'Karnataka-Gulbarga'
                    },
                    {
                        value: '41516',
                        text: 'Karnataka-Hubli'
                    },
                    {
                        value: '41517',
                        text: 'Karnataka-Kolar'
                    },
                    {
                        value: '41520',
                        text: 'Karnataka-Mysore'
                    },
                    {
                        value: '41530',
                        text: 'Karnataka-Mangalore'
                    },
                    {
                        value: '41600',
                        text: 'AnywhereinKerala'
                    },
                    {
                        value: '41601',
                        text: 'Kerala-Calicut'
                    },
                    {
                        value: '41610',
                        text: 'Kerala-Cochin'
                    },
                    {
                        value: '41611',
                        text: 'Kerala-Ernakulam'
                    },
                    {
                        value: '41612',
                        text: 'Kerala-Kannur'
                    },
                    {
                        value: '41613',
                        text: 'Kerala-Kochi'
                    },
                    {
                        value: '41614',
                        text: 'Kerala-Kollam'
                    },
                    {
                        value: '41615',
                        text: 'Kerala-Kottayam'
                    },
                    {
                        value: '41616',
                        text: 'Kerala-Kozhikode'
                    },
                    {
                        value: '41617',
                        text: 'Kerala-Palakkad'
                    },
                    {
                        value: '41618',
                        text: 'Kerala-Palghat'
                    },
                    {
                        value: '41619',
                        text: 'Kerala-Thrissur'
                    },
                    {
                        value: '41620',
                        text: 'Kerala-Trivandrum'
                    },
                    {
                        value: '41700',
                        text: 'Lakshadweep'
                    },
                    {
                        value: '41800',
                        text: 'AnywhereinMaharashtra'
                    },
                    {
                        value: '41801',
                        text: 'Maharashtra-Ahmednagar'
                    },
                    {
                        value: '41810',
                        text: 'Maharashtra-Aurangabad'
                    },
                    {
                        value: '41811',
                        text: 'Maharashtra-Jalgaon'
                    },
                    {
                        value: '41812',
                        text: 'Maharashtra-Kolhapur'
                    },
                    {
                        value: '41820',
                        text: 'Maharashtra-Mumbai'
                    },
                    {
                        value: '41821',
                        text: 'Maharashtra-MumbaiSuburbs'
                    },
                    {
                        value: '41830',
                        text: 'Maharashtra-Nagpur'
                    },
                    {
                        value: '41840',
                        text: 'Maharashtra-Nashik'
                    },
                    {
                        value: '41841',
                        text: 'Maharashtra-NaviMumbai'
                    },
                    {
                        value: '41850',
                        text: 'Maharashtra-Pune'
                    },
                    {
                        value: '41860',
                        text: 'Maharashtra-Solapur'
                    },
                    {
                        value: '41870',
                        text: 'Maharashtra-Thane'
                    },
                    {
                        value: '41900',
                        text: 'AnywhereinMeghalaya'
                    },
                    {
                        value: '41910',
                        text: 'Meghalaya-Shillong'
                    },
                    {
                        value: '42000',
                        text: 'AnywhereinMizoram'
                    },
                    {
                        value: '42010',
                        text: 'Mizoram-Aizawal'
                    },
                    {
                        value: '42100',
                        text: 'AnywhereinManipur'
                    },
                    {
                        value: '42110',
                        text: 'Manipur-Imphal'
                    },
                    {
                        value: '42200',
                        text: 'AnywhereinMadhyaPradesh'
                    },
                    {
                        value: '42210',
                        text: 'MadhyaPradesh-Bhopal'
                    },
                    {
                        value: '42215',
                        text: 'MadhyaPradesh-Gwalior'
                    },
                    {
                        value: '42220',
                        text: 'MadhyaPradesh-Indore'
                    },
                    {
                        value: '42230',
                        text: 'MadhyaPradesh-Jabalpur'
                    },
                    {
                        value: '42240',
                        text: 'MadhyaPradesh-Ujjain'
                    },
                    {
                        value: '42300',
                        text: 'AnywhereinNagaland'
                    },
                    {
                        value: '42310',
                        text: 'Nagaland-Dimapur'
                    },
                    {
                        value: '42400',
                        text: 'AnywhereinOrissa'
                    },
                    {
                        value: '42410',
                        text: 'Orissa-Bhubaneshwar'
                    },
                    {
                        value: '42420',
                        text: 'Orissa-Cuttack'
                    },
                    {
                        value: '42430',
                        text: 'Orissa-Puri'
                    },
                    {
                        value: '42440',
                        text: 'Orissa-Paradeep'
                    },
                    {
                        value: '42450',
                        text: 'Orissa-Rourkela'
                    },
                    {
                        value: '42500',
                        text: 'Pondicherry'
                    },
                    {
                        value: '42600',
                        text: 'AnywhereinPunjab'
                    },
                    {
                        value: '42601',
                        text: 'Punjab-Amritsar'
                    },
                    {
                        value: '42602',
                        text: 'Punjab-Bathinda'
                    },
                    {
                        value: '42610',
                        text: 'Punjab-Jalandhar'
                    },
                    {
                        value: '42620',
                        text: 'Punjab-Ludhiana'
                    },
                    {
                        value: '42630',
                        text: 'Punjab-Mohali'
                    },
                    {
                        value: '42640',
                        text: 'Punjab-Patiala'
                    },
                    {
                        value: '42650',
                        text: 'Punjab-Pathankot'
                    },
                    {
                        value: '42700',
                        text: 'AnywhereinRajasthan'
                    },
                    {
                        value: '42701',
                        text: 'Rajasthan-Ajmer'
                    },
                    {
                        value: '42710',
                        text: 'Rajasthan-Jaipur'
                    },
                    {
                        value: '42715',
                        text: 'Rajasthan-Jaisalmer'
                    },
                    {
                        value: '42716',
                        text: 'Rajasthan-Jodhpur'
                    },
                    {
                        value: '42720',
                        text: 'Rajasthan-Kota'
                    },
                    {
                        value: '42730',
                        text: 'Rajasthan-Udaipur'
                    },
                    {
                        value: '42800',
                        text: 'Sikkim'
                    },
                    {
                        value: '42810',
                        text: 'Sikkim-Gangtok'
                    },
                    {
                        value: '42900',
                        text: 'AnywhereinTamilNadu'
                    },
                    {
                        value: '42910',
                        text: 'TamilNadu-Chennai'
                    },
                    {
                        value: '42920',
                        text: 'TamilNadu-Coimbatore'
                    },
                    {
                        value: '42921',
                        text: 'TamilNadu-Cuddalore'
                    },
                    {
                        value: '42925',
                        text: 'TamilNadu-Erode'
                    },
                    {
                        value: '42930',
                        text: 'TamilNadu-Madurai'
                    },
                    {
                        value: '42931',
                        text: 'TamilNadu-Nagercoil'
                    },
                    {
                        value: '42936',
                        text: 'TamilNadu-Ooty'
                    },
                    {
                        value: '42938',
                        text: 'TamilNadu-Thanjavur'
                    },
                    {
                        value: '42940',
                        text: 'TamilNadu-Tiruchirapalli'
                    },
                    {
                        value: '42941',
                        text: 'TamilNadu-Tirunalveli'
                    },
                    {
                        value: '42943',
                        text: 'TamilNadu-Tuticorin'
                    },
                    {
                        value: '42950',
                        text: 'TamilNadu-Salem'
                    },
                    {
                        value: '42960',
                        text: 'TamilNadu-Hosur'
                    },
                    {
                        value: '42961',
                        text: 'TamilNadu-vellore'
                    },
                    {
                        value: '43100',
                        text: 'AnywhereinUttarPradesh'
                    },
                    {
                        value: '43101',
                        text: 'UttarPradesh-Agra'
                    },
                    {
                        value: '43102',
                        text: 'UttarPradesh-Aligarh'
                    },
                    {
                        value: '43103',
                        text: 'UttarPradesh-Allahabad'
                    },
                    {
                        value: '43104',
                        text: 'UttarPradesh-Bareilly'
                    },
                    {
                        value: '43105',
                        text: 'UttarPradesh-Etah'
                    },
                    {
                        value: '43106',
                        text: 'UttarPradesh-Faizabad'
                    },
                    {
                        value: '43107',
                        text: 'UttarPradesh-Ghaziabad'
                    },
                    {
                        value: '43108',
                        text: 'UttarPradesh-Gorakhpur'
                    },
                    {
                        value: '43110',
                        text: 'UttarPradesh-Lucknow'
                    },
                    {
                        value: '43120',
                        text: 'UttarPradesh-Kanpur'
                    },
                    {
                        value: '43121',
                        text: 'UttarPradesh-Mathura'
                    },
                    {
                        value: '43122',
                        text: 'UttarPradesh-Meerut'
                    },
                    {
                        value: '43123',
                        text: 'UttarPradesh-Moradabad'
                    },
                    {
                        value: '43124',
                        text: 'UttarPradesh-Noida'
                    },
                    {
                        value: '43130',
                        text: 'UttarPradesh-varanasi'
                    },
                    {
                        value: '43200',
                        text: 'AnywhereinWestBengal'
                    },
                    {
                        value: '43201',
                        text: 'WestBengal-Asansol'
                    },
                    {
                        value: '43202',
                        text: 'WestBengal-Barddhaman'
                    },
                    {
                        value: '43203',
                        text: 'WestBengal-Durgapur'
                    },
                    {
                        value: '43204',
                        text: 'WestBengal-Haldia'
                    },
                    {
                        value: '43205',
                        text: 'WestBengal-Jalpaiguri'
                    },
                    {
                        value: '43210',
                        text: 'WestBengal-Kolkata'
                    },
                    {
                        value: '43220',
                        text: 'WestBengal-Kharagpur'
                    },
                    {
                        value: '43230',
                        text: 'WestBengal-Siliguri'
                    },
                    {
                        value: '43400',
                        text: 'AnywhereinChhattisgarh'
                    },
                    {
                        value: '43401',
                        text: 'Chhattisgarh-Bilaspur'
                    },
                    {
                        value: '43402',
                        text: 'Chhattisgarh-Bhillai'
                    },
                    {
                        value: '43403',
                        text: 'Chhattisgarh-Raipur'
                    },
                    {
                        value: '43500',
                        text: 'AnywhereinJharkhand'
                    },
                    {
                        value: '43501',
                        text: 'Jharkhand-Bokaro'
                    },
                    {
                        value: '43510',
                        text: 'Jharkhand-Jamshedpur'
                    },
                    {
                        value: '43502',
                        text: 'Jharkhand-Dhanbad'
                    },
                    {
                        value: '43520',
                        text: 'Jharkhand-Ranchi'
                    },
                    {
                        value: '43600',
                        text: 'AnywhereinUttaranchal'
                    },
                    {
                        value: '43620',
                        text: 'Uttaranchal-Dehradun'
                    },
                    {
                        value: '43630',
                        text: 'Uttaranchal-Hardwar'
                    },
                    {
                        value: '43640',
                        text: 'Uttaranchal-Roorkee'
                    },
                    {
                        value: 'ctry_100000',
                        text: '*****SelectWorkLocationsinChina*****'
                    },
                    {
                        value: '100000',
                        text: 'AnywhereinChina'
                    },
                    {
                        value: 'ctry_20000',
                        text: '*****SelectWorkLocationsinHongKong*****'
                    },
                    {
                        value: '20000',
                        text: 'AnywhereinHongKong'
                    },
                    {
                        value: 'ctry_150000',
                        text: '*****SelectWorkLocationsinJapan*****'
                    },
                    {
                        value: '150000',
                        text: 'AnywhereinJapan'
                    },
                    {
                        value: 'ctry_90100',
                        text: '*****OtherWorkLocations*****'
                    },
                    {
                        value: '90100',
                        text: 'Anyotherlocations'
                    },
                    {
                        value: '90110',
                        text: 'Africa'
                    },
                    {
                        value: '90120',
                        text: 'Asia-MiddleEast'
                    },
                    {
                        value: '90130',
                        text: 'Asia-Others'
                    },
                    {
                        value: '90140',
                        text: 'Australia&amp;NewZealand'
                    },
                    {
                        value: '90150',
                        text: 'Europe'
                    },
                    {
                        value: '90160',
                        text: 'NorthAmerica'
                    },
                    {
                        value: '90170',
                        text: 'SouthAmerica'
                    }
                ];
            }

        };
    });

});