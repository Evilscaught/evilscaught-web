<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-12 col-md-3 mb-4">
        <h2>City</h2>
        <b-form-checkbox
          v-for="option in filters.city"
          :key="option"
          :value="option"
          v-model="activeFilters.city"
        >{{option}}</b-form-checkbox>
        <h2 class="mt-4">Hair color</h2>
        <b-form-checkbox
          v-for="(option) in filters.hairColor"
          :key="option + 'a'"
          :value="option"
          v-model="activeFilters.hairColor"
        >{{option}}</b-form-checkbox>
        <h2 class="mt-4">Eye color</h2>
        <b-form-checkbox
          v-for="(option) in filters.eyeColor"
          :key="option + 'b'"
          :value="option"
          v-model="activeFilters.eyeColor"
        >{{option}}</b-form-checkbox>
      </div>

      <div class="col-12 col-md-9">
        <div class="row">
          <div
            v-for="employee in filteredEmployees"
            :key="employee.id"
            class="col-12 col-md-4 mb-4"
          >
            <EmployeeItem
              :name="employee.name"
              :age="employee.age"
              :city="employee.city"
              :hairColor="employee.hairColor"
              :eyeColor="employee.eyeColor"
              :hobbys="employee.hobbys"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import EmployeeItem from "@/components/employees/EmployeeItem";
import { mapGetters } from "vuex";

export default {
  name: "Employees",
  data: function() {
    return {
      filters: {
        city: ["Amsterdam", "Rotterdam", "Alkmaar", "Delft"],
        hairColor: ["red", "green", "blue"],
        eyeColor: ["red", "green", "blue"]
      },
      activeFilters: {
        city: [],
        hairColor: [],
        eyeColor: []
      }
    };
  },
  components: {
    EmployeeItem
  },
  computed: {
    ...mapGetters(["allEmployees"]),

    filteredEmployees() {
      let filtered;
      const {
        city: cityFilter,
        hairColor: hairColorFilter,
        eyeColor: eyeColorFilter
      } = this.activeFilters;

      const filters = {};

      if (cityFilter.length > 0) filters["city"] = cityFilter;
      if (hairColorFilter.length > 0) filters["hairColor"] = hairColorFilter;
      if (eyeColorFilter.length > 0) filters["eyeColor"] = eyeColorFilter;

      // this is a piece of magic
      filtered = this.allEmployees.filter(employee => {
        const arrayOfBooleans = Object.keys(filters).map(filterName => {
          return filters[filterName].includes(employee[filterName]);
        });

        if (arrayOfBooleans.includes(false)) {
          return false;
        } else {
          return true;
        }
      });

      return filtered;
    }
  }
};

function empty(array) {
  return array.length === 0;
}

function unique(array) {
  if (empty(array)) return [];

  return array.reduce((acc, curr) => {
    if (acc.includes(curr)) return acc;
    acc.push(curr);

    return acc;
  }, []);
}
</script>