/**
 * Este eh o arquivo de rotas da aplicacao.
 * Neste projeto estamos utilizando o Flow-Router
 */

FlowRouter.route('/',{
    action: function(params){
        BlazeLayout.render("mainLayout");
    }
})