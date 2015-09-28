
class MultipleChoiceSingleAnswerEditor extends MultipleChoiceEditor
  @register 'MultipleChoiceSingleAnswerEditor'

  onCreated: ->
    super(AssessmentType.MULTIPLE_CHOICE_SINGLE_ANSWER, '')
