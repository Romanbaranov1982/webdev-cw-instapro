import {user} from "../index.js";
export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `<div class="page-header">
    <h1 class="logo">instapro</h1>
    <button class="header-button add-or-login-button">
    ${
      user
        ? `<div title="Добавить пост" class="add-post-sign"></div>`
        : "Войти"
    }
    </button>
    ${
      user
        ? `<button title="${user.name}" class="header-button logout-button">Выйти</button>`
        : ""
    }  
    </button>
</div>
<div class="form">
        <h3 class="form-title">Добавить пост</h3>
        <div class="form-inputs">
          <div class="upload-image-container">
  <div class="upload=image">
      
            <label class="file-upload-label secondary-button">
                <input type="file" class="file-upload-input" style="display:none">
                Выберите фото
            </label>
          
      
  </div>
</div>
          <label>
            Опишите фотографию:
            <textarea class="input textarea" rows="4"></textarea>
            </label>
            <button class="button" id="add-button">Добавить</button>
        </div>
      </div>
   
  `;

    appEl.innerHTML = appHtml;

    document.getElementById("add-button").addEventListener("click", () => {
       console.log(3);
      onAddPostClick({
        description: "Описание картинки",
        imageUrl: "https://image.png",
      });
     
    });
  };

  render();
}
