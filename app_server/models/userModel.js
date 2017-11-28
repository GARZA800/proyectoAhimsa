function userModel(id, username, password, facebbok_id, facebbok_token, facebbok_name, facebbok_email){
    this.id = id;
    this.username = username;
    this.password = password;
    this.facebbok_id = facebbok_id;
    this.facebbok_token = facebbok_token;
    this.facebbok_name = facebbok_name;
    this.facebbok_email = facebbok_email;
  }

module.exports = userModel;