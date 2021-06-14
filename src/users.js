import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    ArrayInput,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    FormTab,
    Toolbar,
    SaveButton
} from 'react-admin';
import { HobbiesCustomIterator } from "./CustomIterators";
import { VerticalTabbedForm } from "./VerticalTabbedForm";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import RowingIcon from '@material-ui/icons/Rowing';
import AddIcon from '@material-ui/icons/Add';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const MuiTabs = withStyles({
    root: {
        borderRight: '1px solid #CCC'
    }
})(Tabs);

const TabLabel = ({ text }) => (
    <Typography style={{
        width: '125px'
    }}>{text}</Typography>
)

const CustomTabs = (props) => {
    return (
        <MuiTabs
            orientation="vertical"
            variant="scrollable"
            value={props.value}
            aria-label="Vertical tabs example"
            onChange={props.onChange}
        >
            <Tab label={<TabLabel text="General Information" />} icon={<AccountBoxIcon />} />
            <Tab label={<TabLabel text="Address" />} icon={<HomeIcon />} />
            <Tab label={<TabLabel text="What Are Your Hobbies?" />} icon={<RowingIcon />} />
            <Tab label={<TabLabel text="Extra 1" />} icon={<AddIcon />} />
            <Tab label={<TabLabel text="Extra 2" />} icon={<AddIcon />} />
            <Tab label={<TabLabel text="Extra 3" />} icon={<AddIcon />} />
            <Tab label={<TabLabel text="Extra 4" />} icon={<AddIcon />} />
            <Tab label={<TabLabel text="Extra 5" />} icon={<AddIcon />} />
        </MuiTabs>

    )
}

const UsersCreateToolbar = (props) => {
    return (
        <Toolbar style={{ marginTop: 0 }} {...props}>
            <SaveButton />
        </Toolbar>
    )
}

const UsersTitle = ({ record }) => {
    return <span>Users {record ? `"${record.name}"` : ''}</span>
}

export const UsersList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="occupation" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const UsersEdit = props => (
    <Edit title={<UsersTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="occupation" />
            <TextInput source="address.streetAddress" />
            <TextInput source="address.apt" />
            <TextInput source="address.city" />
            <TextInput source="address.state" />
            <TextInput source="address.zipcode" />
            <ArrayInput source="hobbies">
                <HobbiesCustomIterator />
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const UsersCreate = props => (
    <Create {...props}>
        <VerticalTabbedForm 
            tabs={<CustomTabs {...props} />}
            toolbar={<UsersCreateToolbar {...props} />}
        >
            <FormTab label="General Information">
                <TextInput source="id" />
                <TextInput source="name" />
                <TextInput source="occupation" />
            </FormTab>
            <FormTab label="Address">
                <TextInput source="address.streetAddress" />
                <TextInput source="address.apt" />
                <TextInput source="address.city" />
                <TextInput source="address.state" />
                <TextInput source="address.zipcode" />
            </FormTab>
            <FormTab label="What Are Your Hobbies?">
                <ArrayInput source="hobbies">
                    <HobbiesCustomIterator />
                </ArrayInput>
            </FormTab>
        </VerticalTabbedForm>
    </Create>
);