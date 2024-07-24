package org.example.day01back;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/form")
public class FormController {
    @RequestMapping(method = RequestMethod.POST, value = "/test")
    public void test(String email, String pw, @RequestPart MultipartFile image) {
        System.out.println(email);
        System.out.println(pw);
        System.out.println(image.getOriginalFilename());
    }

    @RequestMapping(method = RequestMethod.POST, value = "/test2")
    public void test2(String accept,
                      @RequestParam List<String> lunch,
                      LocalDate date) {
        System.out.println(accept);
        lunch.forEach(System.out::println);
        System.out.println(date);
    }
}
