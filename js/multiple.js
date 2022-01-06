//Function on "Buy" button
function getBuy(){
    $(".giftPurchases").css({display:"block"});
    $(".giftSelection").css({display:"none"});
    $("#getBuy").text("Buy (selected)").css({backgroundColor:"dodgerblue"});
    $("#getSell").text("Sell").css({backgroundColor:"dimgray"});
    $(".nairaResult").text(0);
};

//function on "Sell" button
function getSell(){
    $(".giftPurchases").css({display:"none"});
    $(".giftSelection").css({display:"block"});
    $("#getBuy").text("Buy").css({backgroundColor:"dimgray"});
    $("#getSell").text("Sell (selected)").css({backgroundColor:"dodgerblue"});
    $(".nairaResult").text(0);
};

//function on the gift category
function getGiftCategory(){
    var category = $("#giftCategory").val();
    
    switch(category){
        case "Amazon":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='200'>Germany Amazon Cash Receipt - (Rate: 200)</option><option value='200'>Germany Amazon No Receipt - (Rate: 200)</option><option value='240'>UK Amazon Cash Receipt - (Rate: 240)</option><option value='250'>UK Amazon Debit/Credit/Activation Receipt - (Rate: 250)</option><option value='200'>UK Amazon No Receipt - (Rate: 200)</option><option value='220'>USA Amazon Cash Receipt (101-200) - (Rate: 220)</option><option value='230'>USA Amazon Cash Receipt(50-100) - (Rate:230 )</option><option value='190'>USA Amazon Cash Receipt 500 Single - (Rate: 190)</option><option value='170'>USA Amazon Cash Receipt(201-499) - (Rate:170 )</option><option value='170'>USA Amazon Debit Receipt(101-200) - (Rate:170 )</option><option value='180'>USA Amazon Debit Receipt(300-499) - (Rate:180 )</option><option value='220'>USA Amazon Debit Receipt(50-100) - (Rate:220 )</option><option value='150'>USA Amazon Debit Receipt 500 Single- (Rate:150 )</option><option value='100'>USA Amazon E-code - (Rate:100 )</option><option value='200'>USA Amazon No Receipt(50-100) - (Rate:200 )</option><option value='140'>USA Amazon No Receipt(500) - (Rate:140 )</option>");
            break;
        case "American Express":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='290'>American Express AMEX(100-399) - (Rate: 290)</option><option value='310'>American Express AMEX(400 and above) - (Rate: 310)</option>");
            break;
        case "Apple Store Gift Card":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='290'>Apple Store - (Rate: 290)</option>");
            break;
        case "Best Buy":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='270'>Best Buy - (Rate: 270)</option>");
            break;
        case "Colorpop":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='180'>COLORPOP Gift Card - (Rate: 180)</option>");
            break;
        case "eBay":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='240'>USA eBay Physical(100 and above) - (Rate: 240)</option><option value='190'>USA eBay Physical(25-49) - (Rate: 190)</option><option value='210'>USA eBay Physical(50-99) - (Rate: 210)</option>");
            break;
        case "Footlocker":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='300'>FOOTLOCKER Gift Card - (Rate: 300)</option>");
            break;
        case "GameStop":
            $("#giftSubcategory").html("<option value=''>Select</option>");
            break;
        case "Google Play":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='150'>AUD Google Play Physical - (Rate: 150)</option><option value='170'>CAD Google Play Physical - (Rate: 170)</option><option value='260'>CHF Google Play Physical - (Rate: 260)</option><option value='230'>EURO Google Play Physical - (Rate: 230)</option><option value='110'>NZD Google Play Physical - (Rate: 110)</option><option value='200'>SINGAPORE Google Play Physical - (Rate: 200)</option><option value='230'>UK Google Play Ecode - (Rate: 230)</option><option value='260'>UK Google Play Physical Gift Card - (Rate: 260)</option><option value='200'>USA Google Play Card(15-49) - (Rate: 200)</option><option value='220'>USA Google Play Ecode(50 and above) - (Rate: 220)</option><option value='250'>USA Google Play Physical(50 and above) - (Rate: 250)</option>");
            break;
        case "iTunes":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='90'>Australia iTunes Physical Card - (Rate: 90)</option><option value='120'>Australia iTunes Physical - (Rate: 120)</option><option value='140'>Belgium iTunes Physical Card - (Rate: 140)</option><option value='130'>Canada iTunes Physical Card - (Rate: 130)</option><option value='30'>Denmark iTunes  - (Rate: 30)</option><option value='190'>Finland iTunes Physical - (Rate: 190)</option><option value='100'>France iTunes Physical - (Rate: 100)</option><option value='190'>Germany iTunes Physical - (Rate: 190)</option><option value='130'>Greece iTunes Physical  - (Rate: 130)</option><option value='130'>Ireland iTunes Physical  - (Rate: 130)</option><option value='100'>Italy iTunes Physical Gift - (Rate: 100)</option><option value='120'>Luxembourg iTunes Physical  - (Rate: 120)</option><option value='75'>Netherlands iTunes Physical - (Rate: 75)</option><option value='10'>Norway iTunes - (Rate: 10)</option><option value='100'>NZD iTunes Physical - (Rate: 100)</option><option value='130'>Portugal iTunes Physical  - (Rate: 130)</option><option value='120'>Singapore iTunes Physical - (Rate: 120)</option><option value='120'>Spain iTunes Physical - (Rate: 120)</option><option value='15'>Sweden iTunes - (Rate: 15)</option><option value='150'>Switzerland iTunes Physical - (Rate: 150)</option><option value='220'>UK iTunes Physical  - (Rate: 220)</option><option value='220'>USA iTunes Ecode(101-500) - (Rate: 220)</option><option value='170'>USA iTunes ecode(25-100) - (Rate: 170)</option><option value='100'>USA iTunes Physical(10-49)- (Rate: 100)</option><option value='225'>USA iTunes Physical Big Card 200 Single - (Rate: 225)</option><option value='280'>USA iTunes/Apple Physical 100 - (Rate: 90)</option><option value='230'>USA iTunes/Apple Physical 50 - (Rate: 230)</option>");
            break;
        case "JC Penny":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='190'>JC PENNY Gift Card - (Rate: 190)</option>");
            break;
        case "Macy's":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='280'>USA Macy's Gift Card - (Rate: 280)</option>");
            break;
        case "Nike":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='240'>USA Nike Gift Card(100 to 299) - (Rate: 240)</option><option value='280'>USA Nike Gift Card(300 and above) - (Rate: 280)</option>");
            break;
        case "Nordstrom":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='300'>USA Nordstrom ecode(300 and above) - (Rate: 300)</option><option value='200'>USA Nordstrom ecode(50 -299) - (Rate: 200)</option><option value='270'>USA Nordstrom Physical(100 -299) - (Rate: 270)</option><option value='280'>USA Nordstrom Physical(300 and above) - (Rate: 280)</option><option value='230'>USA Nordstrom Physical(50-99) - (Rate: 230)</option>");
            break;
        case "Play Station":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='170'>USA Play Station Card - (Rate: 170)</option>");
            break;
        case "Razor Gold":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='300'>USA Razor Gold - (Rate: 300)</option>");
            break;
        case "Saks":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='200'>SAKS Gift Card - (Rate: 200)</option>");
            break;
        case "Sephora":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='250'>USA Sephora Ecode(300 and above) - (Rate: 250)</option><option value='230'>USA Sephora Ecode(50 -299) - (Rate: 230)</option><option value='270'>USA Sephora Physical(300 and above) - (Rate: 270)</option><option value='260'>USA Sephora Physical(100-299) - (Rate: 260)</option>");
            break;
        case "Steam":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='170'>AUD Steam Physical - (Rate: 170)</option><option value='200'>Canada Steam Wallet - (Rate: 200)</option><option value='270'>EURO Steam ecode - (Rate: 270)</option><option value='300'>EURO Steam Physical - (Rate: 300)</option><option value='150'>NZD Steam Wallet - (Rate: 150)</option><option value='320'>Switerzland Steam (50-100) - (Rate: 320)</option><option value='380'>UK Steam Physical - (Rate: 380)</option><option value='230'>USA Steam Ecode(101-200) - (Rate: 230)</option><option value='240'>USA Steam Ecode(50-100) - (Rate: 240)</option><option value='230'>USA Steam Physical(101 and above) - (Rate: 230)</option><option value='270'>USA Steam Physical(50-100) - (Rate: 270)</option><option value='220'>USA Steam Physical and ecode(20-49) - (Rate: 220)</option>");
            break;
        case "Target":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='260'>USA Target Gift Card(200 and above) - (Rate: 260)</option>");
            break;
        case "Target Visa":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='210'>TARGET VISA - (Rate: 210)</option>");
            break;
        case "Vanilla":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='270'>USA OneVanilla Visa/Mastercard(100-399) - (Rate: 270)</option><option value='280'>USA OneVanilla Visa/Mastercard Gift card(500 and above) - (Rate: 280)</option>");
            break;
        case "Visa Gift Card":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='250'>Visa Gift Card - (Rate: 250)</option>");
            break;
        case "Walmart":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='170'>USA Walmart ecode(300 above) - (Rate: 170)</option><option value='140'>USA Walmart ecode(50-299) - (Rate: 140)</option><option value='260'>USA Walmart Physical(300 above) - (Rate:260)</option><option value='220'>USA Walmart Physical(50-299) - (Rate: 220)</option>");
            break;
        case "Walmart Visa":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='250'>USA Walmart Visa(200 above) - (Rate: 250)</option>");
            break;
        case "Xbox":
            $("#giftSubcategory").html("<option value=''>Select</option><option value='250'>XBOX Gift card - (Rate: 250)</option>");
            break;
        case " " || empty:
            $("#giftSubcategory").html("<option value=''>Select</option>");
            break;
    }
};


//function to select and buy a gift card
function getGiftCard(){
    var giftCard =$("#giftCard").val();
    return giftCard;
}

//function for getting the value of subcategory
function getGiftSubcat(){
    var value = $("#giftSubcategory").val();
    return value;
}

//Getting the amount for value * input value
function getAmount(){
    var value = getGiftSubcat();
    
    var input = parseFloat($("#amount").val());
    var resultValue= parseFloat(value * input);
    var final = resultValue.toLocaleString();
    $(".nairaResult").text(final);
    
}


function getAmountB(){
    var buy = getGiftCard();
    var input = parseFloat($("#amount2").val());
    var resultBuy = parseFloat(buy * input);
    var buyFinal =resultBuy.toLocaleString();
    $(".nairaResult").text(buyFinal);
}