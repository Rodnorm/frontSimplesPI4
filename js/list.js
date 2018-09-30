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
var total = 0;
var cart = new Array();
var venda = new Array();
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
                        '<button type="button" class="btn btn-primary" OnClick="addItemToCart('+i+'); createCheckoutModal();">Adicionar e finalizar</button>'+
                    '</div>'+
                '</div>'+
            '</div>'+    
        '</div>'+
    '</div>'
);
$('#mainModal').modal('show');
}

function addItemToCart(i){
    
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
        '<div class="modal-dialog modal-lg" role="document" id="cartModalContent">'+
                '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h5 class="modal-title" id="exampleModalLabel">Carrinho</h5>'+
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                            '<span aria-hidden="true">&times;</span>'+
                        '</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<form id="cartForm">'+
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
                                                    '<th scope="col">Total</th>'+
                                                '</tr>'+
                                            '</thead>'+
                                            '<tbody id="productTableBody">'+
                                            '</tbody>'+    
                                        '</table>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="form-group">'+
                                '<div class="m-1">'+
                                    '<p>Formas de pagamento</p'+
                                '</div>'+
                                '<div class="form-check">'+
                                    '<label class="form-check-label">'+
                                        '<input class="form-check-input" type="radio" name="boleto" id="boleto" value="boleto" checked>'+
                                            'Boleto'+
                                    '</label>'+
                                '</div>'+
                                '<div class="form-check disabledRadio">'+
                                    '<label class="form-check-label">'+
                                        '<input class="form-check-input" type="radio" name="credito" id="credito" value="credito" disabled>'+
                                            'Cartão de Crédito'+
                                    '</label>'+
                                '</div>'+
                                '<div class="form-check disabledRadio">'+
                                    '<label class="form-check-label">'+
                                        '<input class="form-check-input" type="radio" name="debito" id="debito" value="debito" disabled>'+
                                            'Cartão de Débito'+
                                    '</label>'+
                                '</div>'+
                                '<div class="input-group mt-2">'+
                                    '<div class="input-group-prepend">'+
                                        '<span class="input-group-text">Email</span>'+
                                     '</div>'+
                                    '<input type="email" class="form-control input-sm" id="inputEmail" aria-describedby="dataHelp" placeholder="Insira seu email">'+
                                '</div>'+
                                '<div class="input-group mt-2">'+
                                    '<div class="input-group-prepend">'+
                                        '<span class="input-group-text">Senha</span>'+
                                     '</div>'+
                                     '<input type="password" class="form-control input-sm" id="inputPassword" placeholder="Senha">'+
                                '</div>'+
                                '<div class="input-group mt-2">'+
                                    '<div class="input-group-prepend">'+
                                        '<span class="input-group-text">:)</span>'+
                                     '</div>'+
                                     '<input type="password" class="form-control input-sm" id="inputRepeatPassword" placeholder="Repita a senha">'+
                                '</div>'+

                                    '<small id="dataHelp" class="form-text text-muted">Seus dados estão seguros conosco :)</small>'+
                                    ''+
                            '<div class="input-group mt-2">'+
                                '<div class="input-group-prepend">'+
                                    '<span class="input-group-text">Nome</span>'+
                                '</div>'+
                                '<input type="text" class="form-control input-sm" id="name" aria-describedby="" placeholder="Insira seu nome">'+
                            '</div>'+    
                            '<div class="input-group mt-2">'+
                                '<div class="input-group-prepend">'+
                                    '<span class="input-group-text">Endereço</span>'+
                                '</div>'+
                                '<input type="text" aria-label="rua" class="form-control" id="rua" placeholder="Rua, avenida...">'+
                                '<input type="number" aria-label="numero" class="form-control" id="numero" placeholder="número">'+
                                '<input type="text" aria-label="complemento" class="form-control" id="complemento" placeholder="Complemento">'+
                            '</div>'+
                            '<div class="input-group mt-2">'+
                                '<div class="input-group-prepend">'+
                                    '<span class="input-group-text">CEP</span>'+
                                '</div>'+
                                '<input type="text" aria-label="rua" class="form-control" id="cep" placeholder="Insira seu cep...">'+
                            '</div>'+

                            '</div>'+    
                                
                        '</form>'+
                    '</div>'+
                    '<div class="modal-footer alignModalButtons">'+
                        '<button type="button" class="btn btn-outline-danger" data-dismiss="modal">Fechar</button>'+
                        '<button type="button" class="btn btn-outline-success" OnClick="finishCartForGood()">Finalizar venda</button>'+
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
        
        var price = parseFloat(cart[i].produto.price.replace(',','.')).toFixed(2);
        var formattedPrice =  (price*parseFloat(cart[i].quantidade));
        var priceString = formattedPrice.toFixed(2).replace('.',',');
        total = total + formattedPrice;

        bodyComponent.push(
            '<tr>'+
                '<td scope="row">'+cart[i].produto.name+'</td>'+
                '<td>'+cart[i].produto.price+'</td>'+
                '<td>'+cart[i].quantidade+'</td>'+
                '<td>'+priceString+'</td>'+
            '</tr>'
        );
        if (i + 1 == cart.length){
            var priceStringTotal = total.toFixed(2).replace('.',',');
            bodyComponent.push(
                '<tr>'+
                '<td scope="row"></td>'+
                '<td></td>'+
                '<td></td>'+
                '<td></td>'+
                '<td>'+priceStringTotal+'</td>'+
                '</tr>'
                );  
            }
        }
        $('#productTableBody').append(bodyComponent);
    }
    
    
function finishCartForGood(){

    var shoppingCart = {
        produtos: this.cart,
        pagamento: $('#boleto')[0].value,
        total: total
    };
    
    var user = {
                usuario: {
                nome: $('#name')[0].value,
                email: $('#inputEmail')[0].value,
                senha: $('#inputPassword')[0].value,
                endereço: {
                        cep: $('#cep')[0].value,
                        rua: $('#rua')[0].value,
                        numero: $('#numero')[0].value,
                        complemento: $('#complemento')[0].value
                }
            }
        };
        venda.push({
            venda: shoppingCart,
            user: user
        });
        console.log(venda);
        $('#cartModal').modal('hide');
        $('#loaderModal').modal('show');
        handleLoader();
}
function handleLoader(){

    setTimeout(function(){
        $("#holdOn").fadeOut();
    },900); 
    
    setTimeout(function(){
        $("#allOk").fadeIn();
    },2000); 

    setTimeout(function(){
        $("#loaderModal").modal('hide');
    },4000);
    setTimeout(function(){
        $("#loaderModal").remove();
    },6000);
}
