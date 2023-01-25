export default function guardrail(mathFunction) {
  try {
    return [mathFunction(), 'Guardrail was processed'];
  } catch (err) {
    return [err.toString(), 'Guardrail was processed'];
  }
}
