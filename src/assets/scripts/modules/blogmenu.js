const items = document.querySelectorAll('.blog-menu__item');
const btns = document.querySelectorAll('.blog-menu__btn');
const posts = document.querySelectorAll('.article');
const menuBtn = document.querySelector('.blog-menu__button');
const articles = document.querySelector('.articles')
let menuShown = true;

function showMenu() {
    const aside = document.querySelector('.blog-menu');

    console.log(menuShown);
    switch (menuShown) {
        case true:
            aside.style.left = 0 + 'px';
            menuBtn.style.left = 250 + 'px';
            menuShown = false;
            break;
        case false:
            aside.style.left = -300 + 'px';
            menuBtn.style.left = -25 + 'px';
            menuShown = true;
            break;
    }
}

menuBtn.addEventListener('click', showMenu);
articles.addEventListener('click', function(e) {
    e.preventDefault();
    showMenu();
});

for (let i = 0; i < btns.length; i++) {
    const button = btns[i];

    button.onclick = function() {


        let data_id = this.dataset.id;
        let parent = this.parentNode;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            item.classList.remove("blog-menu__item--active");
        }
        parent.classList.add("blog-menu__item--active");
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];

            if (post.dataset.id === data_id) {

                window.scrollTo({
                    top: post.offsetTop,
                    behavior: "smooth"
                })
            }
        }
    }
}