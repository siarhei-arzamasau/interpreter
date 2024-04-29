/**
 * AST Transformer
 */

class Transformer {
  /**
   * Translates `def`-expression (function declaration)
   * into a variable declaration with a lambda
   * expression
   */

  transformDefToLambda(defExp) {
    const [_tag, name, params, body] = defExp;
    return ['var', name, ['lambda', params, body]];
  }

  transformSwitchToIf(switchExp) {
    const [_tag, ...cases] = switchExp;

    const ifExp = ['if', null, null, null];

    let current = ifExp;

    for (let i = 0; i < cases.length - 1; i += 1) {
      const [currentCond, currentBlock] = cases[i];

      current[1] = currentCond;
      current[2] = currentBlock;

      const next = cases[i + 1];
      const [nextCond, nextBlock] = next;

      current[3] = nextCond === 'else' ? nextBlock : ['if'];

      current = current[3];
    }

    return ifExp;
  }

  transformIncToSet(setExp) {
    const [_tag, name] = setExp;
    return ['set', name, ['+', name, 1]];
  }
}

module.exports = Transformer;
