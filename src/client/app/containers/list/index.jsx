import ComponentsList from '../../components/list/index.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    componentsList: state.componentsList,
  }
}

export default connect(mapStateToProps)(ComponentsList);