view = views.Datasource.extend();

view.prototype.render = _.wrap(view.prototype.render, function(func) {
    new Tablesort($('table'));
});
