import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.stream.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>loading...</div>
        } 
        console.log(this.props.stream);
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                onSubmit={this.onSubmit}
                initialValues={_.pick(this.props.stream, 'title', 'description')} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {    
    // console.log(state.streams[ownProps.match.params.id]);
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, {
    fetchStream,
    editStream
})(StreamEdit);