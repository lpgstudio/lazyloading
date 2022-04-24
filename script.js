var load_flag = 0;
loadMore(load_flag);

// Foi usado o jQuery-3.5.1

function loadMore(start){
    jQuery.ajax({
        url: 'get.php', //arquivo que busca os posts
        data: 'start='+start, //quantidade de posts a ser carregado
        type: 'post',
        success:function(result){
            jQuery('#block').append(result);
            load_flag += 6; // quantidade de posts que serão carregados
        }
    });
}

// função que faz o LazyLoad por Scroll
jQuery(document).ready(function(){
    jQuery(window).scroll(function(){
        if(jQuery(window).scrollTop() >= jQuery(document).height() - jQuery(window).height()){
            loadMore(load_flag); //passa o valor atualizado para o Ajax
        }
    });
});