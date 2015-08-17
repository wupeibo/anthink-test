//居中弹出框
var docEle = function() {
    return document.getElementById(arguments[0]) || false;
}
function qrcodeDiv(_id, title, src, msg) {
    var m = "mask";
    if (docEle(_id))
        document.removeChild(docEle(_id));
    if (docEle(m))
        document.removeChild(docEle(m));
    // 新激活图层 
    var newDiv = document.createElement("div");
    newDiv.id = _id;
    newDiv.style.position = "absolute";
    newDiv.style.zIndex = "9999";
    newDiv.style.width = "440px";
    newDiv.style.height = "420px";
    newDiv.style.top = "200px";
    newDiv.style.left = (parseInt(document.body.scrollWidth) - 500) / 2 + "px"; // 屏幕居中 
    newDiv.style.background = "#FFFFFF";
//    newDiv.style.border = "1px solid #860001";
    newDiv.style.padding = "5px";
    newDiv.innerHTML = "<strong style='font-size:24px; padding:0 0 0 10px;color:#3A5FCD;'>" + title + "</strong>";    //标题
    document.body.appendChild(newDiv);
    // mask图层遮罩
    var newMask = document.createElement("div");
    newMask.id = m;
    newMask.style.position = "absolute";
    newMask.style.zIndex = "1";
    newMask.style.width = document.body.scrollWidth + "px";
    newMask.style.height = document.body.scrollHeight + "px";
    newMask.style.top = "0px";
    newMask.style.left = "0px";
    newMask.style.background = "#000";
    newMask.style.filter = "alpha(opacity=40)";
    newMask.style.opacity = "0.40";
    document.body.appendChild(newMask);
    // 关闭mask和新图层 
    var newA = document.createElement("a");
    newA.href = "";
    newA.innerHTML = "关闭";
    newA.style.float = "right";
    newA.onclick = function() {
        document.body.removeChild(docEle(_id));
        document.body.removeChild(docEle(m));
        return false;
    }
    newDiv.appendChild(newA);
    var br = document.createElement("br");
    newDiv.appendChild(br);
    //二维码图片
    var newImg = document.createElement("img");
    newImg.src = src;
    newImg.alt = "二维码登录";
    newImg.width = "300";
    newImg.height = "300";
    newImg.style.margin = "20px 62px";
    newDiv.appendChild(newImg);
    //附加消息
    var newP = document.createElement("p");
    newP.style.width = "300";
    newP.style.margin = "0 62px";
    newP.innerHTML = "<strong style='font-size:16px; padding:0 0 0 40px;color:#3A5FCD;'>" + msg + "</strong>";
    newDiv.appendChild(newP);
}
//登录弹出层
function loginDiv(_id, title) {
    var m = "mask";
    if (docEle(_id))
        document.removeChild(docEle(_id));
    if (docEle(m))
        document.removeChild(docEle(m));
    // 新激活图层 
    var newDiv = document.createElement("div");
    newDiv.id = _id;
    newDiv.style.position = "absolute";
    newDiv.style.zIndex = "9999";
    newDiv.style.width = "310px";
    newDiv.style.height = "330px";
    newDiv.style.top = "200px";
    newDiv.style.left = (parseInt(document.body.scrollWidth) - 415) / 2 + "px"; // 屏幕居中 
    newDiv.style.background = "#FFFFFF";
    newDiv.style.radius = "20px";
    newDiv.style.padding = "30px 5px 5px 5px";
    newDiv.innerHTML = "<strong style='font-size:24px; padding:0 0 0 120px;color:#3A5FCD;'>" + title + "</strong>";    //标题
    document.body.appendChild(newDiv);
    // mask图层 
    var newMask = document.createElement("div");
    newMask.id = m;
    newMask.style.position = "absolute";
    newMask.style.zIndex = "1";
    newMask.style.width = document.body.scrollWidth + "px";
    newMask.style.height = document.body.scrollHeight + "px";
    newMask.style.top = "0px";
    newMask.style.left = "0px";
    newMask.style.background = "#000";
    newMask.style.filter = "alpha(opacity=40)";
    newMask.style.opacity = "0.40";
    document.body.appendChild(newMask);
    //提交数据
    var data = document.createElement("div");
    data.innerHTML = "<p><input type='text' id='username' placeholder='请输入用户名' style='font-size:16px;padding:4px;' /></p><p><input type='password' id='password' placeholder='请输入登录密码' style='font-size: 16px;padding: 4px;margin: 26px 0 26px 0' /></p><br>";
    data.style.width = "300px";
    data.style.height = "100px";
    data.style.margin = "30px 0 60px 46px";
    newDiv.appendChild(data);

    // 关闭mask和新图层 
    var exit = document.createElement("button");
    exit.id = "btn";
    exit.innerHTML = "<strong style='font-size:18px;color:#ffffff'>取 消</strong>";
    exit.style.marginLeft = "19%";
    exit.style.background = "#3A5FCD";
    exit.style.width = "80px";
    exit.style.height = "34px";
    exit.style.border = "0";
    exit.onclick = function() {
        document.body.removeChild(docEle(_id));
        document.body.removeChild(docEle(m));
        return false;
    }
    newDiv.appendChild(exit);

    //提交数据
    var submit = document.createElement("button");
    submit.id = "btn";
    submit.innerHTML = "<strong style='font-size:18px;color:#ffffff'>登 录</strong>";
    submit.style.background = "#3A5FCD";
    submit.style.marginLeft = "20px";
    submit.style.width = "80px";
    submit.style.height = "34px";
    submit.style.border = "0";
    submit.onclick = function() {
        var uname = $("#username").val();
        var pwd = $("#password").val();
        if (uname.length >= 4 && pwd.length >= 6)
            $.ajax({
                type: "POST",
                url: "/imappt/index.php/Home/Index/login",
                data: {
                    "type": 1,
                    "username": uname,
                    "password": pwd,
                    "timed": new Date().getTime()
                },
                dataType: "json",
                success: function(data, textStatus) {
//                    console.log("return: " + data);
                    if (data.status == 1) {
                        Alert(data.info, 1600);
                        setTimeout(function() {
                            window.location.reload();
                        }, 2000);
                    } else {
                        Alert(data.info, 1600);
                    }
                }
            });
        else
            Alert("用户名或密码格式不正确", 1200);
    }
    newDiv.appendChild(submit);
}
function registerDiv(_id, title) {
    var m = "mask";
    if (docEle(_id))
        document.removeChild(docEle(_id));
    if (docEle(m))
        document.removeChild(docEle(m));
    // 新激活图层 
    var newDiv = document.createElement("div");
    newDiv.id = _id;
    newDiv.style.position = "absolute";
    newDiv.style.zIndex = "9999";
    newDiv.style.width = "310px";
    newDiv.style.height = "470px";
    newDiv.style.top = "200px";
    newDiv.style.left = (parseInt(document.body.scrollWidth) - 415) / 2 + "px"; // 屏幕居中 
    newDiv.style.background = "#FFFFFF";
    newDiv.style.radius = "20px";
    newDiv.style.padding = "30px 5px 5px 5px";
    newDiv.innerHTML = "<strong style='font-size:24px; padding:0 0 0 120px;color:#3A5FCD;'>" + title + "</strong>";    //标题
    document.body.appendChild(newDiv);
    // mask图层 
    var newMask = document.createElement("div");
    newMask.id = m;
    newMask.style.position = "absolute";
    newMask.style.zIndex = "1";
    newMask.style.width = document.body.scrollWidth + "px";
    newMask.style.height = document.body.scrollHeight + "px";
    newMask.style.top = "0px";
    newMask.style.left = "0px";
    newMask.style.background = "#000";
    newMask.style.filter = "alpha(opacity=40)";
    newMask.style.opacity = "0.40";
    document.body.appendChild(newMask);
    //提交数据
    var data = document.createElement("div");
    data.innerHTML = "<p><input type='text' id='username' placeholder='用户名长度大于等于4' style='font-size:16px;padding:4px;' /></p>" +
            "<p><input type='password' id='pwd' placeholder='密码长度大于等于6' style='font-size: 16px;padding: 4px;margin: 18px 0 0 0' /></p>" +
            "<p><input type='password' id='repwd' placeholder='请输入确认密码' style='font-size: 16px;padding: 4px;margin: 18px 0 0 0' /></p>" +
            "<p><input type='text' id='nickname' placeholder='请输入昵称' style='font-size: 16px;padding: 4px;margin: 18px 0 18px 0' /></p>" +
            "<p><input type='text' id='email' placeholder='请输入邮箱' style='font-size: 16px;padding: 4px;' /></p><br>";
    data.style.width = "300px";
    data.style.height = "200px";
    data.style.margin = "30px 0 110px 46px";
    newDiv.appendChild(data);

    // 关闭mask和新图层 
    var exit = document.createElement("button");
    exit.id = "btn";
    exit.innerHTML = "<strong style='font-size:18px;color:#ffffff'>取 消</strong>";
    exit.style.marginLeft = "19%";
    exit.style.background = "#3A5FCD";
    exit.style.width = "80px";
    exit.style.height = "34px";
    exit.style.border = "0";
    exit.onclick = function() {
        document.body.removeChild(docEle(_id));
        document.body.removeChild(docEle(m));
        return false;
    }
    newDiv.appendChild(exit);

    //提交数据
    var submit = document.createElement("button");
    submit.id = "btn";
    submit.innerHTML = "<strong style='font-size:18px;color:#ffffff'>注 册</strong>";
    submit.style.background = "#3A5FCD";
    submit.style.marginLeft = "20px";
    submit.style.width = "80px";
    submit.style.height = "34px";
    submit.style.border = "0";
    submit.onclick = function() {
        var uname = $("#username").val();
        var pwd = $("#pwd").val();
        var repwd = $("#repwd").val();
        var nickname = $("#nickname").val();
        var email = $("#email").val();
        if (uname.length >= 4 && pwd.length >= 6) {
            if (pwd == repwd) {
                $.ajax({
                    type: "POST",
                    url: "/imappt/index.php/Home/Index/login.pp",
                    data: {
                        "type": 2,
                        "username": uname,
                        "password": pwd,
                        "nickname": nickname,
                        "email": email,
                        "timed": new Date().getTime()
                    },
                    dataType: "json",
                    success: function(data, textStatus) {
                        console.log("return: " + data);
                        if (data.status == 1) {
                            Alert(data.info, 1600);
                            setTimeout(function() {
                                window.location.reload();
                            }, 2000);
                        } else {
                            Alert(data.info, 1600);
                        }
                    }
                });
            } else {
                Alert("密码不一致", 1200);
            }
        } else {
            Alert("用户名或密码格式不正确", 1200);
        }
    }
    newDiv.appendChild(submit);
}