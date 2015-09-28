
class MultipleChoiceMultipleAnswersEditor extends MultipleChoiceEditor
  @register 'MultipleChoiceMultipleAnswersEditor'

  onCreated: ->
    super(AssessmentType.MULTIPLE_CHOICE_MULTIPLE_ANSWERS, [])
