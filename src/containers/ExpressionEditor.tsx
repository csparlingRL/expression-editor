import * as React from "react";
import { connect } from "react-redux";
import { ExpressionEditorReduxState } from "../types/ExpressionEditorTypes";
import ExpressionView from "../components/ExpressionView";
import ExpressionButtons from "../components/ExpressionButtons";

import * as expressionSelectors from "../store/expressions/reducer";
import * as expressionActions from "../store/expressions/actions";

import "../styles/ExpressionEditor.css";

interface ExpressionEditorProps {
    displayText: string;
}

class ExpressionEditor extends React.Component<any, ExpressionEditorReduxState> {

    constructor(props: any){
        super(props);

        let { initialText } = props;

        if (initialText) {
            this.props.dispatch(expressionActions.setText(initialText));
        } else {
            this.props.dispatch(expressionActions.setText("No Text Given"));
        }
    }

    render(): JSX.Element {
        let { initialText } = this.props;

        return (
            <div>
                <div className="header">
                    <h1>React Expression Editor</h1>
                </div>
                <div className="content">
                    <div className="buttons">
                        <ExpressionButtons />
                    </div>
                    <div className="expr-edit-container">
                        <div className="expr-edit">
                            <ExpressionView />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: ExpressionEditorReduxState) : any {
    return {
        initialText: state.displayText
    };
}

export default connect(mapStateToProps)(ExpressionEditor);