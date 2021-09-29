export const GridService = {
  instance: null,

  gridData: [],
  getInstance: function () {
    if (!this.instance) {
      this.instance = {
        setGridData: (data) => {
          this.gridData = [...data];
        },
        groupByFields: (fields) => {
          //const groupHeaderRow = emptyRow(field, this.gridData);

          const groupTree = createGroupTree(this.gridData, fields);
          console.log("group tree", groupTree);
        },
      };
    }
    return this.instance;
  },
};

function createGroupTree(data, fields) {
  const remainingFields = [...fields];
  const field = remainingFields.unshift();
  if (field) {
    const groups = tagGroups(data, field);
    Object.entries(groups).reduce((res, [k, v]) => {
      res[k] = createGroupTree(v, remainingFields);
      return res;
    }, {});
  } else {
    return data;
  }
}

function traverseGroupTree(data, fields) {
  const field = fields.unshift();
}

function tagGroups(data, field) {
  return data.reduce((groups, row) => {
    groups[row[field]] = groups[row[field]] || [];
    groups[row[field]] = row;
    return groups;
  }, {});
}

function emptyRow(field, data) {
  const row = data.length ? data[0] : {};
  const empty = Object.keys(row).reduce((res, key) => {
    res[key] = "";
    return res;
  }, {});
  empty.groupId = row[field];

  return empty;
}
