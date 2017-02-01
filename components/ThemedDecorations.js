const React = require('react')

class ThemeDecorations extends React.Component {
  render() {

    const childrenWithExtraProp = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       className: this.props.theme
     }))

    return (
      <div>
        {childrenWithExtraProp}
      </div>
    )
  }
}

module.exports = ThemeDecorations
