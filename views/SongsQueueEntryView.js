var SongsQueueEntryView = Backbone.View.extend({

  template: _.template('<p>On queue: <%= title %> by <%= artist %></p>'),

  events: {
    'click': function(){
      this.model.enqueue();
    }
  },

  initialize: function(){
    this.render();
    this.model.on('remove', function(){
      this.remove();
    }, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
