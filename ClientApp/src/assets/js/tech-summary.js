var getCSExperience = function () {

    // C# experience timelines
    var csWTCExperience = new Date("12/01/2010") - new Date("09/01/2010");
    var csFVTCExperience = new Date("05/18/2015") - new Date("01/01/2013");
    var csWestExperience = new Date("10/04/2017") - new Date("05/19/2015");
    var csExperience = csFVTCExperience + csWTCExperience + csWestExperience;

    return (csExperience / 1000 / 60 / 60 / 24 / 365).toFixed(2) + " yrs";
};

var getSQLExperience = function () {

    // SQL experience timelines
    var sqlWTCExperience = new Date("12/01/2010") - new Date("08/01/2010");
    var sqlFVTCExperience = new Date("05/18/2015") - new Date("01/01/2014");
    var sqlWestExperience = new Date("10/04/2017") - new Date("05/19/2015");
    var sqlExperience = sqlFVTCExperience + sqlWTCExperience + sqlWestExperience;

    return (sqlExperience / 1000 / 60 / 60 / 24 / 365).toFixed(2) + " yrs";
};

var getCPPExperience = function () {

    // C++ experience timelines
    var cppWSExperience = new Date("05/01/2009") - new Date("01/01/2009");
    var cppFVTCExperience = new Date("12/01/2014") - new Date("08/01/2014");
    var cppExperience = cppFVTCExperience + cppWSExperience;

    return (cppExperience / 1000 / 60 / 60 / 24 / 365).toFixed(2) + " yrs";
};

var getJSExperience = function () {

    // JavaScript experience timelines
    var jsWTCExperience = new Date("12/01/2010") - new Date("08/01/2010");
    var jsFVTCExperience = new Date("05/18/2015") - new Date("08/01/2013");
    var jsWestExperience = new Date("10/04/2017") - new Date("01/01/2017");
    var jsExperience = jsFVTCExperience + jsWTCExperience + jsWestExperience;

    return (jsExperience / 1000 / 60 / 60 / 24 / 365).toFixed(2) + " yrs";
};

var getHTMLExperience = function () {

    // HTML experience timelines
    var htmlWSExperience = new Date("12/01/2008") - new Date("01/01/2008");
    var htmlWTCExperience = new Date("12/01/2010") - new Date("08/01/2010");
    var htmlFVTCExperience = new Date("05/18/2015") - new Date("08/01/2013");
    var htmlWestExperience = new Date("10/04/2017") - new Date("01/01/2017");
    var htmlExperience = htmlWSExperience + htmlFVTCExperience + htmlWTCExperience + htmlWestExperience;

    return (htmlExperience / 1000 / 60 / 60 / 24 / 365).toFixed(2) + " yrs";
};

var getPHPExperience = function () {

    // PHP experience timelines
    var phpFVTCExperience = new Date("05/18/2015") - new Date("01/01/2015");
    var phpExperience = phpFVTCExperience;

    return (phpExperience / 1000 / 60 / 60 / 24 / 365).toFixed(2) + " yrs";
};

var getMySQLExperience = function () {

    // MySQL experience timelines
    var mysqlWTCExperience = new Date("12/01/2010") - new Date("08/01/2010");
    var mysqlFVTCExperience = new Date("05/18/2014") - new Date("01/01/2014");
    var mysqlExperience = mysqlWTCExperience + mysqlFVTCExperience;

    return (mysqlExperience / 1000 / 60 / 60 / 24 / 365).toFixed(2) + " yrs";
};