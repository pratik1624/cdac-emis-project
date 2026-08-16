package com.emis.accountant;

import com.emis.accountant.dto.AccountantDashboardResponse;

public interface AccountantService {

    Accountant createAccountant(Accountant accountant);

    Accountant getAccountant();

    AccountantDashboardResponse getDashboard();

}