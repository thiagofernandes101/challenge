$(document).ready(function() {
    $.getJSON("http://localhost:8080/challenge/products.json", function(data) {
        let valorTotal = 0;

        for (let i in data['cart']['item']) {
            let newPrice = String(data['cart']['item'][i]['quantity'] * data['cart']['item'][i]['bestPrice']);
            newPrice = newPrice.substr(0, newPrice.length - 2) + "," + newPrice.substr(newPrice.length - 2);
            newPrice = newPrice.substr(0, newPrice.length - 6) + "." + newPrice.substr(newPrice.length - 6);

            // valor total dos produtos
            valorTotal = valorTotal + (data['cart']['item'][i]['quantity'] * data['cart']['item'][i]['bestPrice']);

            let liComponent = document.createElement('li');
            liComponent.className = 'media list-group-item';

            let imgComponent = document.createElement('img');
            imgComponent.src = ".." + data['cart']['item'][i]['image'];
            imgComponent.className = 'mr-3';
            imgComponent.width = '64';

            let divComponent = document.createElement('div');
            divComponent.className = 'media-body';

            // div referente a descrição do produto
            let divComponentRow1 = document.createElement('div');
            divComponentRow1.className = 'row';

            // div referente a quantidade de produtos
            let divComponentRow2 = document.createElement('div');
            divComponentRow2.className = 'row';

            // div referente ao valor total do produto
            let divComponentRow3 = document.createElement('div');
            divComponentRow3.className = 'row';

            // coluna referente a descricao do produto
            let divComponentCol1 = document.createElement('div');
            divComponentCol1.className = 'col-md-12';

            // coluna referente a quantidade de produtos
            let divComponentCol2 = document.createElement('div');
            divComponentCol2.className = 'col-md-12';

            // coluna referente ao valor total do produto
            let divComponentCol3 = document.createElement('div');
            divComponentCol3.className = 'col-md-12';

            // linha de texto referente a descrição
            let pComponentDescription = document.createElement('p');
            pComponentDescription.innerHTML = data['cart']['item'][i]['name'];

            // linha de texto referente a quantidade
            let pComponentQuantity = document.createElement('p');
            pComponentQuantity.innerHTML = 'Qtd: ' + data['cart']['item'][i]['quantity'];

            // linha de texto referente ao preço
            let pComponentPrice = document.createElement('p');
            pComponentPrice.style = 'color: green';
            pComponentPrice.innerHTML = '<strong>R$ ' + newPrice + '<strong>';

            // montagem do código html
            liComponent.appendChild(imgComponent);
            liComponent.appendChild(divComponent);

            divComponent.appendChild(divComponentRow1);
            divComponent.appendChild(divComponentRow2);
            divComponent.appendChild(divComponentRow3);

            divComponentRow1.appendChild(divComponentCol1);
            divComponentRow2.appendChild(divComponentCol2);
            divComponentRow3.appendChild(divComponentCol3);

            divComponentCol1.appendChild(pComponentDescription);
            divComponentCol2.appendChild(pComponentQuantity);
            divComponentCol3.appendChild(pComponentPrice);

            document.getElementById('listProduct').appendChild(liComponent);
        }

        // configuração do valor total a pagar pelos produtos
        valorTotal = String(valorTotal);
        valorTotal = valorTotal.substr(0, valorTotal.length - 2) + "," + valorTotal.substr(valorTotal.length - 2);
        valorTotal = valorTotal.substr(0, valorTotal.length - 6) + "." + valorTotal.substr(valorTotal.length - 6);

        let pValorTotal = document.createElement('p');
        pValorTotal.innerHTML = 'Total do pedido: <strong>R$ ' + valorTotal + '</strong>';

        document.getElementById('totalPedido').appendChild(pValorTotal);
    });
});