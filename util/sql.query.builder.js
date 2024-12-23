let DbClient =require("../config/db.config");

function SqlQueryBuilder() {

}

SqlQueryBuilder.prototype.ParameterType = {
    "Input": "IN",
    "Output": "OUT",
    "INOUT": "INOUT"
}
SqlQueryBuilder.prototype.SqlParameter = function (value) {
    try {
        if (typeof (value) != 'number') {
            switch (value) {
                case "":
                    // set same as value
                    break;
                case '':
                    // set same as value
                    break;
                default:
                    value = value ? value : null
                    break;
            }
        }
        return value;
    } catch (e) {
        throw e;
    }

}

SqlQueryBuilder.prototype.Execute = function (queryText, parameters) {
    return new Promise((resolve, reject) => {
        try {
          
                DbClient.query(
                            {
                                sql: queryText ? queryText : "",
                                timeout: 300000, // 300s
                                values: parameters ? parameters : [],
                            },
                            function (error, results, fields) {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve(results);
                                }
                            },
                        );
                    
               
            
        } catch (e) {
            reject(e.stack.toString());
        }
    });
}


module.exports.SqlQueryBuilder = new SqlQueryBuilder();