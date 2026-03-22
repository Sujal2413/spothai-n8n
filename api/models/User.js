const { v4: uuidv4 } = require('uuid');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseSecret = process.env.SUPABASE_SECRET;

const supabase = createClient(supabaseUrl, supabaseKey, supabaseSecret);

const User = class {
  constructor(
    id = uuidv4(),
    username = '',
    email = '',
    password = '',
    role = 'user'
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  static async create(user) {
    try {
      const { data, error } = await supabase
        .from('users')
        .insert([user])
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const { data, error } = await supabase.from('users').select('*');

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, user) {
    try {
      const { data, error } = await supabase
        .from('users')
        .update({ id: id, ...user })
        .eq('id', id)
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const { data, error } = await supabase
        .from('users')
        .delete()
        .eq('id', id)
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = User;