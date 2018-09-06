export const mapStateToProps = state => {
  return {
    name: state.name
  };
};

export function changeUsername(name) {
  return {
    type: "CHANGE_NAME",
    username: name
  };
}

export const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(changeUsername(name));
    }
  };
};
