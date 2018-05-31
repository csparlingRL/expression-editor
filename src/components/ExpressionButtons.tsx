import * as React from "react";
import { connect } from "react-redux";

import { ExpressionEditorReduxState } from "../types/ExpressionEditorTypes";
import * as expressionSelectors from "../store/expressions/reducer";
import * as expressionActions from "../store/expressions/actions";
import "../styles/ExpressionEditor.css";

class ExpressionButtons extends React.Component<any, any> {

    constructor(props: any){
        super(props);
    }

    
    onAdd = (): void => {
        this.props.setText("Add Button Clicked");
    }

    onClone = (): void => {
        this.props.setText("Clone Button Clicked");
    }

    onRemove = (): void => {
        this.props.setText("Remove Button Clicked");
    }

    render(): JSX.Element {
        return (
            <div>
                <div>
                    <input type="button" className="button" onClick={this.onAdd} value="Add"/>
                    <input type="button" className="button" onClick={this.onClone} value="Clone"/>
                    <input type="button" className="button" onClick={this.onRemove} value="Remove"/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: ExpressionEditorReduxState) : any {
    return {
    };
}

const mapDispatchToProps: any = dispatch => {
    return {
        setText: (text) => {dispatch(expressionActions.setText(text))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpressionButtons);