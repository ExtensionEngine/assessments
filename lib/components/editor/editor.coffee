
Operation = SEnum [{ key: 'SET' }, { key: 'PUSH' }, { key: 'PULL' }]

class AssessmentEditor extends BlazeComponent
  @register 'AssessmentEditor'

  onCreated: (context) ->
    @context = new ReactiveVar(context)

  persisted: => @context.get()?._id

  assessment: =>
    if @context.get()._id
      Assessments.findOne(@context._id)
    else
      @context.get()

  save: =>
    if not persisted()
      _id = Meteor.call('assessment.insert', assessment())
      @context.set Assessments.findOne(_id)

  update: (key, value, op = Operation.SET) =>
    if @persisted()
      Meteor.call('assessment.update', key, value, op)
    else
      context = @context.get()
      property = context.components[key]

      if op is Operation.SET
        property = value
      else if op is Operation.PUSH
        property.push({ id: Random.id(), value: value })
      else if op is Operation.PULL
        context.components[key] = Lazy(property).filter((it) -> true if it.id isnt value).toArray()

      @context.set context
