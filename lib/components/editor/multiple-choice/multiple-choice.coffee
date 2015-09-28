
class MultipleChoiceEditor extends AssessmentEditor
  @register 'MultipleChoiceEditor'

  onCreated: (type, answer) ->
    if @data()?.context
      context = @data().context
    else
      context =
        type: type
        components:
          question: ''
          options: [],
          answer: answer

    super context

  events: -> [
    'click .add-option': @addOption
    'click .remove-option': @removeOption
  ]

  addOption: ->
    input = Template.instance().$('.option-input')
    @update('options', input.val(), Operation.PUSH)
    input.val('')

  removeOption: ->
    @update('options', this.currentData().id, Operation.PULL)
