class TransitTemplate < JbuilderTemplate
  # Override format and handler. Can't pass those things to JbuilderTemplate.
  def partial!(*args)
    template, options = args
    if template.is_a?(::Hash)
      render_options = template.merge(formats: [:transit], handlers: [:transit])
    else
      render_options = {partial: template, locals: options || {}, formats: [:transit], handlers: [:transit]}
    end
    super(render_options)
  end
end


class ActionView::Template
  class Handlers::Transit
    # https://github.com/rails/jbuilder/blob/master/lib/jbuilder/jbuilder_template.rb
    def call(template)
      # this juggling is required to keep line numbers right in the error
      %{__already_defined = defined?(json); json||=TransitTemplate.new(self, key_formatter: Jbuilder::KeyFormatter.new(:dasherize, :to_sym)); #{template.source}
        ::Transit::Rails::Renderer.new(json.attributes!).render.html_safe unless (__already_defined && __already_defined != "method")}
    end
  end
  register_template_handler(:transit, Handlers::Transit.new)
end
