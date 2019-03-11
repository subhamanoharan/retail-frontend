import React, { Component} from 'react';

import AddNewItem from './AddManualItemForm';
import ImmutableCart from '../../models/immutableCart';
import ItemsDataTable from '../dataTable/itemsDataTable';
import BillService from '../../services/billService';
import billDataTableService from '../../services/billDataTableService';

export default class Bill extends Component {
  render() {
    return (
        <ItemsDataTable
          service={new BillService(new ImmutableCart([]))}
          datatableService={billDataTableService}
          addForm={AddNewItem}
          masterList={this.props.masterList}
        />
    );
  }
}
