const html = require('choo/html')
const Component = require('choo/component')

class ProfileHeaderImage extends Component {
  constructor (name, state, emit) {
    super(name)

    this.state = state
    this.emit = emit
  }

  createElement (props) {
    this.cover = props.cover

    return html`
      <div class="db aspect-ratio" style="margin-bottom:calc(0px - var(--height-2));padding-top:calc(520 / 2480 * 100%);">
        <span role="img" aria-label="" style=${this.cover ? `background: var(--dark-gray) url(${this.cover}) center / cover no-repeat` : ''} class="bg-near-black bg-center z-1 cover aspect-ratio--object"></span>
      </div>
    `
  }

  update (props) {
    return true
  }
}

module.exports = ProfileHeaderImage