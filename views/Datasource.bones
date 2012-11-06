view = views.Datasource.extend();

view.prototype.render = _.wrap(view.prototype.render, function(func) {
    func.call(this);
    $('table', this.el).attr('id', 'features');
    $('tr.min, tr.max', this.el).addClass('no-sort');

    this.sort = new Tablesort(document.getElementById('features'));
});

view.prototype.showAll = _.wrap(view.prototype.showAll, function(func) {
    func.call(this);
    this.sort.refresh();
    return false;
});
