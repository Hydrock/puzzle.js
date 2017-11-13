import ComponentView from '../../components/component-view/index.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    renderComponent: state.renderComponent,
  }
}

export default connect(mapStateToProps)(ComponentView);