export const change_value = (key, value) => {
  return {
    type: 'change-value',
    key,
    value
  }
};

export const change_contact_value = (index, key, value) => {
  return {
    type: 'change-contact-value',
    c_index: index,
    c_key: key,
    c_value: value
  }
};

export const add_contact = () => {
  return {
    type: 'add-contact',
  }
};

export const remove_contact = (index) => {
  return {
    type: 'remove-contact',
    c_index: index
  }
};

export const save_target = (target) => {
  return {
    type: 'save-target',
    target
  }
};

export const save_edited_target = (target) => {
  return {
    type: 'save-edited-target',
    target
  }
};
