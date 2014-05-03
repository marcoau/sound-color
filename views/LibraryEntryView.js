var LibraryEntryView = Backbone.View.extend({

  template: _.template('<p><%= title %> by <%= artist %></p>'),

  initialize: function(){
    this.render();
  },
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
