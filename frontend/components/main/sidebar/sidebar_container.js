import React from 'react';
import { connect } from 'react-redux';

import { fetchAllFeeds, fetchAllSources } from '../../../actions/feed_actions';
import { openModal } from '../../../actions/modal_actions';

import SideBar from './sidebar';

const mapStateToProps = (state) => ({
  feeds: state.entities.feeds,
  sources: state.entities.sources
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  fetchAllSources: () => dispatch(fetchAllSources()),
  openModal: (modal, optional_props) =>
    dispatch(openModal(modal, optional_props))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
