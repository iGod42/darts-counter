import PropTypes from 'prop-types'

export default PropTypes.shape({
  playerName: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  legs: PropTypes.number.isRequired,
  didBegin: PropTypes.bool,
  theirTurn: PropTypes.bool
})