let produtos = [];

$.ajax({
    url: 'http://127.0.0.1:8082/v1/products/all',
    method: 'GET',
    async: false,
    success: function(response){
        produtos = response.content;
    }
})

console.log(produtos);
console.log(produtos[0].name);

const listContainer = document.querySelector("#list");
console.log(listContainer);

function render(produtos){
    let html = '';

    if(produtos.length <= 0){
        html += `<div>Nenhum Produto Disponivel</div>`;
    }else{
        produtos.forEach(function (produto){
            html += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="card text-center bg-light">
                    <a href="#" class="position-absolute end-0 p-2 text-primary">
                        <i class="bi-suit-heart" style="font-size: 24px; line-height: 24px;"></i>
                    </a>
                    <a href="/produto.html">
                        <img src="${produto.urlImage}" class="card-img-top">
                    </a>
                    <div class="card-header">
                        R$ ${produto.price}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${produto.name}</h5>
                        <p class="card-text truncar-3l">
                            ${produto.description}
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="carrinho.html" class="btn btn-primary mt-2 d-block">
                            Adicionar ao Carrinho
                        </a>
                    </div>
                </div>
            </div>
            `;
        });
    }

    console.log(html);
    listContainer.innerHTML = html;
}

render(produtos);