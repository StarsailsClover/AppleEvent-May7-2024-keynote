document.getElementById('file-select').addEventListener('click', function() {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <button id="upload-local">从电脑中选择</button>
        <button id="upload-url">从URL获取</button>
    `;
    document.getElementById('modal-title').innerText = '选择文件来源';
    showModal();

    document.getElementById('upload-local').addEventListener('click', function() {
        // 创建文件选择器
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pptx';
        input.onchange = e => {
            const file = e.target.files[0];
            // 处理文件上传
            console.log(file);
            hideModal();
        };
        input.click();
    });

    document.getElementById('upload-url').addEventListener('click', function() {
        const url = prompt("请输入文件的URL:");
        if (url) {
            // 处理URL获取
            console.log("从URL获取文件:", url);
            hideModal();
        }
    });
});

// 全屏功能
document.getElementById('fullscreen').addEventListener('click', function() {
    const container = document.getElementById('ppt-container');
    if (container.requestFullscreen) {
        container.requestFullscreen();
    } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
    } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
    }
});

// 主题切换
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// 登录和注册模态框
document.getElementById('login').addEventListener('click', function() {
    showLoginModal();
});
document.getElementById('register').addEventListener('click', function() {
    showRegisterModal();
});

// 显示模态框
function showModal() {
    document.getElementById('modal').style.display = 'block';
}

// 隐藏模态框
function hideModal() {
    document.getElementById('modal').style.display = 'none';
}

// 登录模态框
function showLoginModal() {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <input type="text" id="login-email" placeholder="邮箱" required>
        <input type="password" id="login-password" placeholder="密码" required>
        <button id="login-submit">登录</button>
    `;
    document.getElementById('modal-title').innerText = '登录';
    showModal();

    document.getElementById('login-submit').addEventListener('click', function() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        // 在这里处理登录逻辑
        console.log("登录:", email, password);
        hideModal();
    });
}

// 注册模态框
function showRegisterModal() {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <input type="text" id="register-email" placeholder="邮箱" required>
        <input type="password" id="register-password" placeholder="密码" required>
        <button id="register-submit">注册</button>
    `;
    document.getElementById('modal-title').innerText = '注册';
    showModal();

    document.getElementById('register-submit').addEventListener('click', function() {
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        // 在这里处理注册逻辑
        console.log("注册:", email, password);
        hideModal();
    });
}

// 关闭模态框
document.getElementById('close-modal').addEventListener('click', hideModal);

// 点击窗口外部关闭模态框
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        hideModal();
    }
};
