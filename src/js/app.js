export default function showHealth(character) {
    let condition;
    if (character.health > 50) {
        condition = 'healthy';
    } else if (character.health >= 15) {
        condition = 'wounded';
    } else if (character.health < 15) {
        condition = 'critical';
    }
    return condition;
  }