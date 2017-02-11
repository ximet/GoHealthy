import {StyleSheet} from 'react-native';

let style = StyleSheet.create({
    dateTouch: {
        flex: 1
    },
    dateTouchBody: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateInput: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#bebebe"
    },
    inputLabel: {
        flex: 1,
        fontSize: 14,
        color: "#39393a"
    },
    dateText: {
        flex: 3,
        fontSize: 17,
        color: "#000000"
    },
    placeholderText: {
        color: '#c9c9c9'
    },
    datePickerMask: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        backgroundColor: '#00000077'
    },
    datePickerCon: {
        backgroundColor: '#fff',
        height: 0,
        overflow: 'hidden'
    },
    btnText: {
        position: 'absolute',
        top: 0,
        height: 42,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTextText: {
        fontSize: 16,
        color: '#46cf98'
    },
    btnTextCancel: {
        color: '#666'
    },
    btnCancel: {
        left: 0
    },
    btnConfirm: {
        right: 0
    },
    datePicker: {
        marginTop: 42,
        borderTopColor: '#ccc',
        borderTopWidth: 1
    },
    disabled: {
        backgroundColor: '#eee'
    }
});

export default style;
