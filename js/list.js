var productArray = new Array(
    {
        name: "Patinho de Borracha",
        price: "19,90",
        description: "Pato de borracha para você",
        src: "./img/products/img1.jpeg",
        alt: "Patinho de borracha"
    },
    {
        name: "Aviãozinho de papel",
        price: "199,90",
        description: "Modelo alienígena para você!",
        src: "./img/products/img2.jpeg",
        alt: "Seu pai sabe fazer aviões de papel?"
    },
    {
        name: "Cubo Mágico da Ursal",
        price: "00,00",
        description: "Todos os lados sao IGUAIS!!",
        src: "./img/products/img3.jpg",
        alt: "Cubo mágido unicolor"
    },
    {
        name: "Patinho de Borracha",
        price: "19,90",
        description: "Pato de borracha para você",
        src: "./img/products/img1.jpeg",
        alt: "Patinho de borracha"
    },
    {
        name: "Aviãozinho de papel",
        price: "199,90",
        description: "Modelo alienígena para você!",
        src: "./img/products/img2.jpeg",
        alt: "Seu pai sabe fazer aviões de papel?"
    },
    {
        name: "Cubo Mágico da Ursal",
        price: "00,00",
        description: "Todos os lados sao IGUAIS!!",
        src: "./img/products/img3.jpg",
        alt: "Cubo mágido unicolor"
    },
    {
        name: "Patinho de Borracha",
        price: "19,90",
        description: "Pato de borracha para você",
        src: "./img/products/img1.jpeg",
        alt: "Patinho de borracha"
    },
    {
        name: "Aviãozinho de papel",
        price: "199,90",
        description: "Modelo alienígena para você!",
        src: "./img/products/img2.jpeg",
        alt: "Seu pai sabe fazer aviões de papel?"
    },
    {
        name: "Cubo Mágico da Ursal",
        price: "00,00",
        description: "Todos os lados sao IGUAIS!!",
        src: "./img/products/img3.jpg",
        alt: "Cubo mágido unicolor"
    },
    {
        name: "Patinho de Borracha",
        price: "19,90",
        description: "Pato de borracha para você",
        src: "./img/products/img1.jpeg",
        alt: "Patinho de borracha"
    },
    {
        name: "Aviãozinho de papel",
        price: "199,90",
        description: "Modelo alienígena para você!",
        src: "./img/products/img2.jpeg",
        alt: "Seu pai sabe fazer aviões de papel?"
    },
    {
        name: "Cubo Mágico da Ursal",
        price: "00,00",
        description: "Todos os lados sao IGUAIS!!",
        src: "./img/products/img3.jpg",
        alt: "Cubo mágido unicolor"
    }
);
/*
cart model= {
    produto: {produto},
    quantidade:
}
*/
var cart = new Array();
var quantidade = 0;

$(document).ready(function() {
    ul = loadList(productArray);
    insertListItems(ul);
    // setTimeout( addEvent(productArray), 5000);
    
});

function addEvent(productArray){
    for (var i = 0; i < productArray.length; i++) {
        $('#price-'+i).click(function(){
            $('#toggler-'+i).removeClass('showHide');
        } );
    }
}

function loadList(productArray){
var ulComponent = new Array;
    for (var i = 0; i < productArray.length; i++){
    ulComponent.push(
        '<div class="item col-xs-4 col-lg-4 mt-4">'+
            '<div class="thumbnail card">'+
                '<div class="img-event">'+
                    '<img class="group list-group-image img-fluid" src="'+
                        productArray[i].src+'" alt="'+productArray[i].alt+'" />'+
                '</div>'+
                '<div class="caption card-body">'+
                    '<h4 class="group card-title inner list-group-item-heading">'+
                        productArray[i].name+'</h4>'+
                    '<p class="group inner list-group-item-text">'+
                        productArray[i].description+
                    '</p>'+
                    '<div class="row">'+
                        '<div class="col-xs-12 col-md-6">'+
                            '<p class="lead">'+
                                'R$'+
                                productArray[i].price +
                            '</p>'+
                        '</div>'+
                        '<div class="col-xs-12 col-md-6">' +
                            '<a class="btn btn-outline-success btn-sm" OnClick="openModal('+i+')">Adicionar ao carrinho</a>'+
                        '</div>' +
                    '</div>'+
                '</div>'+
           '</div>'+
        '</div>'
    );
    }
    return ulComponent;
}

function openModal(i){
    if ($('#modalContent')){
        $('#modalContent').remove();
    }
    $('#mainModal').append(
    '<div class="modal-dialog" role="document" id="modalContent">'+
        '<div class="modal-content">'+
            '<div class="modal-header">'+
            '<h5 class="modal-title" id="productModal">'+ productArray[i].name+'</h5>' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                '<span aria-hidden="true">&times;</span>'+
            '</button>'+
        '</div>'+
        '<div class="modal-body">'+
            '<div class="thumbnail card">'+
                '<div class="alert alert-success" role="alert" hidden id="productAddedToCartAlert">'+
                    '<strong>Boa!</strong> Item adicionado com sucesso ao carrinho!'+
                '</div>'+
                '<div class="alert alert-danger" role="alert" hidden id="invalidQuantityAlert">'+
                    '<strong>Preencha a quantidade!</strong> Tem que comprar mais que zero, né?!'+
                '</div>'+
                '<div class="img-event">'+
                    '<img class="group list-group-image img-fluid" src="'+
                        productArray[i].src+'" alt="'+productArray[i].alt+'" />'+
                '</div>'+
                '<div class="caption card-body">'+
                    '<h4 class="group card-title inner list-group-item-heading">'+
                        productArray[i].name+'</h4>'+
                    '<p class="group inner list-group-item-text">'+
                        productArray[i].description+
                    '</p>'+
                    '<div class="row">'+
                        '<div class="col-xs-12 col-md-6">'+
                            '<p class="lead">'+
                                'R$'+
                                productArray[i].price +
                            '</p>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
           '</div>'+
        '</div>' +
        '<div class="modal-footer">'+
            '<div class="item col-xs-4 col-lg-12">'+
                '<div class="input-group">'+
                    '<div class="input-group-prepend">'+
                        '<span class="input-group-text" id="basic-addon1">Quantidade</span>'+
                    '</div>'+
                    '<input type="number" class="form-control" placeholder="00" aria-label="quantity" OnKeyup="addQuantity(event)" aria-describedby="basic-addon1">'+
                '</div>'+ 
                    '<div class="alignModalButtons">'+
                        '<button type="button" class="btn btn-secondary" OnClick="addItemToCart('+i+')" >Adicionar</button>'+
                        '<button type="button" class="btn btn-primary" OnClick="createCheckoutModal()">Ir para o carrinho</button>'+
                    '</div>'+
                '</div>'+
            '</div>'+    
        '</div>'+
    '</div>'
);
$('#mainModal').modal('show');
}

function addItemToCart(i){
    debugger
    if (quantidade == 0){
        $('#invalidQuantityAlert').removeAttr('hidden');
        setTimeout(function(){
            $('#invalidQuantityAlert').attr('hidden', true);
        }, 2000);
        return;
    }
    let isItemInCart = false;
    for (var j = 0; j <= cart.length; j++){
        if (cart[j] == productArray[i]){
            cart[j].produto = productArray[i]
            cart[j].quantidade;
            isItemInCart = true;
        }
        if (j == cart.length && !isItemInCart) {
            cart.push({
                produto : productArray[i],
                quantidade: quantidade
            });
            isItemInCart = true;
        }
    }
    if (isItemInCart) {
        $('#productAddedToCartAlert').removeAttr('hidden');
        setTimeout(function(){
            $('#mainModal').modal('hide');
        },1000);
    }
}

function insertListItems(ul){
    for (var i = 0; i < ul.length; i++){
        $('#products').append(ul[i]);
    }
}

function addQuantity(event){
    quantidade = event.target.value;
}

function createCheckoutModal(){
    if($('#mainModal')){
        setTimeout(function(){
            $('#mainModal').modal('hide');
        },200);
    }else{
        return;
    }

    if ($('#cartModalContent')){
        $('#cartModalContent').remove();
    }
    $('#cartModal').append(
        '<div class="modal-dialog" role="document" id="cartModalContent">'+
                '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h5 class="modal-title" id="exampleModalLabel">Carrinho</h5>'+
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                            '<span aria-hidden="true">&times;</span>'+
                        '</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<form>'+
                            '<div class="form-group">'+
                                '<label for="exampleInputEmail1">Email address</label>'+
                                '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">'+
                                '<small id="emailHelp" class="form-text text-muted">Well never share your email with anyone else.</small>'+
                            '</div>'+
                            '<div class="form-group">'+
                                '<div class="alignModalButtons">'+
                                    '<a class="btn btn-outline-info btn-sm" data-toggle="collapse" href="#cartProductTable" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Mostrar produtos</a>'+
                                    '<button class="btn btn-sm btn-outline-danger" id="resetCart">Esvaziar carrinho</button>'+
                                '</div>'+    
                            '<div class="row">'+
                                '<div class="col">'+
                                    '<div class="collapse" id="cartProductTable">'+
                                        '<table class="table table-hover table-sm" id="prodTableCart">'+
                                            '<thead>'+
                                                '<tr>'+
                                                    '<th scope="col">Produto</th>'+
                                                    '<th scope="col">Preço</th>'+
                                                    '<th scope="col">Quantidade</th>'+
                                                    '<th scope="col">Subtotal</th>'+
                                                '</tr>'+
                                            '</thead>'+
                                            '<tbody id="productTableBody">'+
                                            '</tbody>'+    
                                        '</table>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="form-group">'+
                                '<label for="exampleInputPassword1">Password</label>'+
                                '<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">'+
                            '</div>'+
                            '<div class="form-group form-check">'+
                                '<input type="checkbox" class="form-check-input" id="exampleCheck1">'+
                                '<label class="form-check-label" for="exampleCheck1">Check me out</label>'+
                            '</div>'+
                                '<button type="submit" class="btn btn-primary">Submit</button>'+
                            '</form>'+
                        '</div>'+
                    '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                        '<button type="button" class="btn btn-primary">Save changes</button>'+
                    '</div>'+
                '</div>'+
            '</div>'
    );

    createTableBody();

    setTimeout(function(){
        $('#cartModal').modal('show');
    },500);
}

function resetCart(){
    cart = [];
    createTableBody();
}

function createTableBody(){
    var bodyComponent = new Array();
    
    if (cart.length == 0){
        bodyComponent.push(
            '<div class="alert alert-info" role="alert">'+
                'Adicione alguns itens primeiro :)'+
            '</div>'
        );
        $('#productTableBody').remove();
        $('#prodTableCart').remove();
        $('#resetCart').remove();
        $('#cartProductTable').append(bodyComponent);
        return;
    }
    for(var i = 0; i < cart.length; i++){
        var price = parseFloat(cart[i].produto.price.replace(',','.'));
        bodyComponent.push(
            '<tr>'+
                '<td scope="row">'+cart[i].produto.name+'</td>'+
                '<td>'+cart[i].produto.price+'</td>'+
                '<td>'+cart[i].quantidade+'</td>'+
                '<td>'+price*cart[i].quantidade+'</td>'+
            '</tr>'
        );
    }
    $('#productTableBody').append(bodyComponent);
}