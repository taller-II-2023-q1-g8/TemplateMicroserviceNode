const wrong_parameter_error_msg = "Parameter can not be empty";
const wrong_body_error_msg = "Got some wrong body parameter";
const resource_not_found_msg = "Resource not found";

const wrap_error_into_res = (error) => {return error?.message || error;}

module.exports = {
    wrap_error_into_res,
    wrong_parameter_error_msg,
    wrong_body_error_msg,
    resource_not_found_msg
}