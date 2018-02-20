import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  block: {
    maxWidth: 250,
    marginLeft: 200,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class CheckboxExampleSimple extends React.Component {
  state = {
    checked: false,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    return (
      <div style={styles.block}>

        <Checkbox
          checkedIcon={<Visibility />}
          uncheckedIcon={<VisibilityOff />}
          label="Показать/скрыть пароль"
          style={styles.checkbox}
        />
      </div>
    );
  }
}

export default CheckboxExampleSimple;