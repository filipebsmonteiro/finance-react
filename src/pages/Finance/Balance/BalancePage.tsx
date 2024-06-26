import constants from "@/app/constants";
import AppContext from "@/app/providers";
import { setTitle } from "@/store/layout";
import { createRecord, updateRecord, deleteRecord, loadBalance } from "@/store/balance";
import { BalanceRecord, RootState } from "@/store/state";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pen, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { InputMoney } from "@/components/ui/input-money";
import { v4 as uuid } from 'uuid'

interface RecordScreenI extends BalanceRecord {
  isEditing: boolean;
}

function BalancePage() {
  const dispatch = useDispatch();

  const { records: storeRecords, totalIncomes, totalExpenses } = useSelector((state: RootState) => state.balance);
  const [records, setRecords] = useState<RecordScreenI[]>([]);
  const newRecord = useRef<BalanceRecord>();

  useEffect(() => {
    dispatch(setTitle('Balance Information'));
    dispatch(loadBalance());
    setRecords(
      () => storeRecords.map((record) => ({...record, isEditing: false }))
    );
    newRecord.current = {
      id: uuid(),
      type: null,
      amount: 0,
      description: ''
    };
  }, [dispatch]);

  const toggleEdit = (record: RecordScreenI) => {
    setRecords(
      () => storeRecords.map((rec) => {
        if (record.id === rec.id) {
          return {...rec, isEditing: !record.isEditing }
        }
        return {...rec, isEditing: false }
      })
    );
  };

  const handleDelete = (record: RecordScreenI) => {
    // dispatch({ type: 'balance/deleteRecord', payload: record });
    dispatch(deleteRecord(record));
  };

  const handleUpdate = (record: RecordScreenI) => {
    dispatch(updateRecord(record));
  };

  const updateNewRecord = (record: RecordScreenI) => {
    newRecord.current = record
  };

  const handleNew = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(createRecord(newRecord.current));
    newRecord.current = {
      id: uuid(),
      type: null,
      amount: 0,
      description: ''
    };
  };
  

  return (
    <>
      <AppContext.Consumer>
        {({ formatters : { currency } }) =>
          <>
            <p className="text-xl">
              Monthly: <span className="text-blue-500">{currency.format(totalIncomes - totalExpenses)}</span>
            </p>
            {records.map(record => {
              return (
                <div
                  key={record.id}
                  className={`py-2 px-4 bg-white rounded-md my-2 flex justify-between items-center`}
                >
                  {record.isEditing
                  ? <div key={record.id} className="w-full max-w-sm space-y-2">
                    <Select defaultValue={record.type} onValueChange={v => record.type = v}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="income">Income</SelectItem>
                        <SelectItem value="expense">Expense</SelectItem>
                      </SelectContent>
                    </Select>
                      <Input
                        type="text"
                        placeholder="Name"
                        defaultValue={record.name} size={10}
                        onChange={e => record.name = e.target.value}
                      />
                      <InputMoney
                        formatter={currency}
                        placeholder="Amount"
                        value={record.amount}
                        onChange={e => record.amount = e.target.value}
                      />
                    <div className="flex justify-between">
                      <Button variant="outline" className="min-w-30" onClick={() => toggleEdit(record)}>Cancel</Button>
                      <Button type="submit" className="min-w-[10rem]" onClick={() => handleUpdate(record)}>Submit</Button>
                    </div>
                  </div>
                  : <div key={record.id}>
                    <p>{record.name}</p>
                    <p className={`
                      ${record.type === constants.FINANCE.BALANCE.INCOME ? `text-green-400` : `text-red-400`}
                      text-sm
                    `}>
                      {currency.format(record.amount)}
                    </p>
                  </div>
                  }
                  <div>
                    <Button variant="ghost" className="rounded-lg" onClick={() => toggleEdit(record)}>
                      {record.isEditing ? <X className="mr-2 h-4 w-4" /> : <Pen className="mr-2 h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" className="rounded-lg">
                      <Trash2 className="mr-2 h-4 w-4" onClick={() => handleDelete(record)} />
                    </Button>
                  </div>
                </div>
              )
            })}

            {/* Form to include new record */}
            <form
              onSubmit={evt => handleNew(evt)}
              className="py-2 px-4 bg-white rounded-md my-2 flex justify-between items-center space-x-2"
            >
              <Select onValueChange={e => updateNewRecord({...newRecord.current, type: e})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>
                <Input
                  type="text"
                  placeholder="Name"
                  onChange={e => updateNewRecord({...newRecord.current, name: e.currentTarget.value})}
                />
                <InputMoney
                  formatter={currency}
                  placeholder="Amount"
                  onChange={({ target: { value } }) => updateNewRecord({...newRecord.current, amount: value})}
                />
              <div className="flex justify-between">
                <Button type="submit" className="min-w-[10rem]">Add New</Button>
              </div>
            </form>
          </>
        }
      </AppContext.Consumer>
    </>
  )
}

export default BalancePage
