import * as React from "react";
import { connect } from "react-redux";

import { ExpressionEditorReduxState } from "../types/ExpressionEditorTypes";
import * as expressionSelectors from "../store/expressions/reducer";
import * as expressionActions from "../store/expressions/actions";

interface ExpressionViewProps {
    displayText: string;
}

class ExpressionView extends React.Component<ExpressionViewProps, ExpressionEditorReduxState> {

    constructor(props: any){
        super(props);
        let { displayText } = props;
        this.state = {
            displayText: displayText
        }
    }

    render(): JSX.Element {
        let { displayText } = this.props;

        return (
            <div>
                <h3>{ displayText }</h3>
            </div>
        );
    }
}

function mapStateToProps(state: ExpressionEditorReduxState) : any {
    return {
        displayText: state.displayText
    };
}

const mapDispatchToProps: any = dispatch => {
    return {
        getText: (text) => {dispatch(expressionSelectors.getText(this.state))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpressionView);