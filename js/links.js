
let nameInput = document.getElementById ('nameInput')
let urlInput = document.getElementById ('urlInput')
let linksContainer = document.getElementById ('linksContainer')
const addLinkButton = document.getElementById ('addLinkButton')

    addLinkButton.addEventListener('click', () => {
        let name = nameInput.value;
        let url = urlInput.value;
    
        let savedLinks = JSON.parse(localStorage.getItem('links')) || [];
        savedLinks.push({ name, url });
    
        localStorage.setItem('links', JSON.stringify(savedLinks));
    
        renderLinks();
    });
    
    function renderLinks() {
        linksContainer.innerHTML = '';
    
        let savedLinks = JSON.parse(localStorage.getItem('links')) || [];
    
        savedLinks.forEach((link, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.textContent = link.name;
    
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', () => {
                savedLinks.splice(index, 1);
                localStorage.setItem('links', JSON.stringify(savedLinks));
                renderLinks();
            });
    
            li.appendChild(a);
            li.appendChild(deleteButton);
            linksContainer.appendChild(li);
        });
    }

    renderLinks();